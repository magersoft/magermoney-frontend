import { FieldValidationStatus } from 'vant';
import type { Ref } from 'vue';

import { useResponseError } from '@/shared/features';
import { RequestReturnError } from '@/shared/types/api';

export interface ValidatableForm {
	validate: (name?: string | string[]) => Promise<boolean>;
	resetValidation: (name?: string | string[]) => boolean;
	getValidationStatus: () => Record<string, FieldValidationStatus>;
}

export function useForm<E extends RequestReturnError = RequestReturnError>(
	serverError?: Ref<E | null>
) {
	const formRef = ref<ValidatableForm>();
	const isValidForm = ref(true);
	const { showErrorNotify } = useResponseError();

	const hasServerError = computed(
		() => !!unref(serverError) && unref(serverError)!.message.length > 0
	);
	const errorMessages = computed(() => {
		if (!unref(serverError)) return '';

		const messages = unref(serverError)!.message;
		return Array.isArray(messages) ? messages.join(', ') : messages;
	});

	watch(hasServerError, () => {
		showErrorNotify(unref(errorMessages));
	});

	const validateForm = async () => {
		try {
			await unref(formRef)!.validate();
			isValidForm.value = true;
		} catch (err) {
			isValidForm.value = false;
		}

		return unref(isValidForm);
	};

	const resetValidationForm = () => {
		isValidForm.value = true;
		return unref(formRef)?.resetValidation();
	};

	return {
		formRef,
		hasServerError,
		errorMessages,
		validateForm,
		resetValidationForm
	};
}
