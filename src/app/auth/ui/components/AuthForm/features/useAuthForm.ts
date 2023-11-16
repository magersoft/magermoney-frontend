import { PasswordInput } from 'vant';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import { AUTH_CODE_LENGTH } from '@/app/auth/constants';
import {
	initialLoginFormControls,
	TInitialLoginFormData
} from '@/app/auth/domain';
import {
	useDetectUserService,
	useVerifyUserService
} from '@/app/auth/infrastructure/services';
import { useAuthStore } from '@/app/auth/infrastructure/stores';
import { AppRoutes } from '@/router/constants';
import { useForm } from '@/shared/features';
import { FieldRule } from '@/shared/types/utils';
import { useAppHeader } from '@/shared/ui/components';
import { cloneDeep, isEmail, isPhoneNumber } from '@/shared/utils';

export function useAuthForm() {
	const loginFormData = ref<TInitialLoginFormData>(
		cloneDeep(initialLoginFormControls)
	);
	const { t } = useI18n();
	const { createOrLoginUser } = useDetectUserService();
	const { user, isLoading, error, resetUser, resetError } = useAuthStore();
	const { formRef, validateForm, hasServerError, errorMessages } =
		useForm(error);
	const { setHeader, resetHeader } = useAppHeader();
	const router = useRouter();

	const passwordInputRef = ref<InstanceType<typeof PasswordInput> | null>(null);

	const loginSubmitHandler = async () => {
		if (!(await validateForm())) return;

		const { login } = unref(loginFormData);
		const payload = isEmail(login)
			? { email: login }
			: isPhoneNumber(login)
			? { phone: login }
			: { email: '', phone: '' };

		const response = await createOrLoginUser({}, payload);

		if (unref(response?.data)) {
			unref(passwordInputRef)?.$el.focus();
		}
	};

	const isLetters = ref(false);
	const isDigits = ref(false);
	watch(
		() => unref(loginFormData).login,
		(value) => {
			const onlyDigits = /^[0-9]*$/.test(value);

			if (onlyDigits) {
				isDigits.value = true;
				isLetters.value = false;
			} else {
				isDigits.value = false;
				isLetters.value = true;
			}
		}
	);

	const validationRules = computed<FieldRule[]>(() => [
		{ required: true, message: t('validation.required') },
		unref(isLetters)
			? { validator: isEmail, message: t('validation.isEmail') }
			: {},
		unref(isDigits)
			? { validator: isPhoneNumber, message: t('validation.isPhone') }
			: {}
	]);

	const { verifyAuthCode } = useVerifyUserService();
	const isSendAuthCode = computed(() => !!unref(user));
	const authCode = ref('');
	const authCodeTitle = computed(() =>
		t('auth.authCode', {
			where: unref(isDigits)
				? t('auth.authCodeFromSms')
				: t('auth.authCodeFromEmail')
		})
	);

	watch(authCode, (value) => {
		if (value.length === AUTH_CODE_LENGTH) {
			verifyAuthCode({}, { userId: unref(user)!.id, authCode: value })
				.then((response) => {
					if (response) {
						if (unref(response.data)!.accessToken) {
							loginFormData.value = initialLoginFormControls;
							resetError();
							router.push({ name: AppRoutes.Dashboard });
						}
					}
				})
				.catch(() => {
					authCode.value = '';
				});
		}
	});

	watch(
		isSendAuthCode,
		(value) =>
			value
				? setHeader({
						textLeft: t('back'),
						isLeftArrow: true,
						onClickLeft: () => {
							resetUser();
							resetError();
						}
				  })
				: resetHeader(),
		{ immediate: true }
	);

	return {
		formRef,
		passwordInputRef,
		isLoading,
		validationRules,
		hasServerError,
		errorMessages,
		loginFormData,
		isSendAuthCode,
		authCode,
		authCodeTitle,
		loginSubmitHandler
	};
}
