import { useCurrencies } from '@/modules/currencies';
import { useForm } from '@/shared/features';
import { ActionButtonsEventListeners } from '@/shared/ui/components';
import { cloneDeep } from '@/shared/utils';

import {
	initialIncomeSourceFormControls,
	TInitialIncomeSourceFormData
} from '../../../../domain';
import {
	useCreateIncomeSourceService,
	useFetchIncomeSourcesService
} from '../../../../infrastructure/services';
import { useIncomeSourcesStore } from '../../../../infrastructure/stores';
import { mappingIncomeSourceFormData } from '../utils';

interface UseIncomeSourceFormParams extends ActionButtonsEventListeners {}

export function useIncomeSourceForm({
	onAdd,
	onSubmit
}: UseIncomeSourceFormParams = {}) {
	const incomeSourceFormData = ref<TInitialIncomeSourceFormData>(
		cloneDeep(initialIncomeSourceFormControls)
	);
	const { createIncomeSource } = useCreateIncomeSourceService();
	const { hasIncomeSources, fetchIncomeSources } =
		useFetchIncomeSourcesService();
	const { isLoading, error } = useIncomeSourcesStore();
	const { currenciesItems, isLoading: isLoadingCurrencies } = useCurrencies();

	const {
		formRef,
		validateForm,
		resetValidationForm,
		hasServerError,
		errorMessages
	} = useForm(error);

	const submitHandler = async () => {
		if (!unref(hasIncomeSources)) return;

		if (await validateForm()) {
			await addSubmitHandler();
		}

		resetValidationForm();

		onSubmit?.();
	};

	const addSubmitHandler = async () => {
		if (!(await validateForm())) return;

		const response = await createIncomeSource(
			{},
			mappingIncomeSourceFormData(unref(incomeSourceFormData))
		);

		if (unref(response?.data)) {
			incomeSourceFormData.value = { ...initialIncomeSourceFormControls };

			await fetchIncomeSources({ force: true, quite: true });

			onAdd?.();
		}
	};

	return {
		formRef,
		incomeSourceFormData,
		hasServerError,
		errorMessages,
		hasIncomeSources,
		currenciesItems,
		isLoading,
		isLoadingCurrencies,
		addSubmitHandler,
		submitHandler
	};
}
