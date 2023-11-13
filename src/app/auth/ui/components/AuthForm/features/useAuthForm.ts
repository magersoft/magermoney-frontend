import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import { AUTH_CODE_LENGTH } from '@/app/auth/constants';
import {
	IInitialLoginFormData,
	initialLoginFormControls
} from '@/app/auth/domain';
import {
	useDetectUserService,
	useVerifyUserService
} from '@/app/auth/infrastructure/services';
import { useAuthStore } from '@/app/auth/infrastructure/stores';
import { AppRoutes } from '@/router/constants';
import { useForm } from '@/shared/features';
import { FieldRule } from '@/shared/types/utils';
import { isEmail, isPhoneNumber } from '@/shared/utils';

export function useAuthForm() {
	const loginFormData = ref<IInitialLoginFormData>(initialLoginFormControls);
	const { t } = useI18n();
	const { createOrLoginUser } = useDetectUserService();
	const { user, isLoading, error } = useAuthStore();
	const { formRef, validateForm, hasServerError, errorMessages } =
		useForm(error);

	const loginSubmitHandler = () => {
		if (!validateForm()) return;

		const { login } = unref(loginFormData);
		const payload = isEmail(login)
			? { email: login }
			: isPhoneNumber(login)
			? { phone: login }
			: { email: '', phone: '' };

		createOrLoginUser({}, payload);
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
	const isAuthCode = computed(() => !!unref(user));
	const authCode = ref('');
	const authCodeTitle = computed(() =>
		t('auth.authCode', {
			where: unref(isDigits)
				? t('auth.authCodeFromSms')
				: t('auth.authCodeFromEmail')
		})
	);

	const router = useRouter();

	watch(authCode, (value) => {
		if (value.length === AUTH_CODE_LENGTH) {
			verifyAuthCode({}, { userId: unref(user)!.id, authCode: value })
				.then((response) => {
					if (response) {
						if (unref(response.data)!.accessToken) {
							loginFormData.value = initialLoginFormControls;
							router.push({ name: AppRoutes.Dashboard });
						}
					}
				})
				.catch(() => {
					authCode.value = '';
				});
		}
	});

	return {
		formRef,
		isLoading,
		validationRules,
		hasServerError,
		errorMessages,
		loginFormData,
		isAuthCode,
		authCode,
		authCodeTitle,
		loginSubmitHandler
	};
}
