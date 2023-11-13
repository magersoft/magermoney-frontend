import { FieldValidationStatus } from 'vant';
import type { Ref } from 'vue';

import { RequestReturnError } from '@/shared/types/api';

export interface ValidatableForm {
	validate: (name?: string | string[]) => Promise<boolean>;
	resetValidation: (name?: string | string[]) => boolean;
	getValidationStatus: () => Record<string, FieldValidationStatus>;
}

export function useForm<E extends RequestReturnError = RequestReturnError>(
	serverError: Ref<E | null>
) {
	const formRef = ref<ValidatableForm>();
	const isValidForm = ref(true);

	const hasServerError = computed(
		() => !!unref(serverError) && unref(serverError)!.message.length > 0
	);
	const errorMessages = computed(() => {
		if (!unref(serverError)) return '';

		const messages = unref(serverError)!.message;
		return Array.isArray(messages) ? messages.join(', ') : messages;
	});

	const validateForm = async () => {
		const status = unref(formRef)!.getValidationStatus();
		isValidForm.value = Object.values(status).every(
			(status) => status === 'passed'
		);

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
