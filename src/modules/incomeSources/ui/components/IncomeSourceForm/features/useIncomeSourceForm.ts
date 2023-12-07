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
	const { fetchIncomeSources } = useFetchIncomeSourcesService();
	const { hasIncomeSources, isLoading, error } = useIncomeSourcesStore();

	const { currenciesItems, isLoading: isLoadingCurrencies } = useCurrencies();

	const { formRef, hasServerError, validateForm, resetValidationForm } =
		useForm(error);

	const handleSubmit = async () => {
		if (!unref(hasIncomeSources)) return;

		if (await validateForm()) {
			await handleSubmit();
		}

		resetValidationForm();

		onSubmit?.();
	};

	const handleAddSubmit = async () => {
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
		hasIncomeSources,
		currenciesItems,
		isLoading,
		isLoadingCurrencies,
		handleAddSubmit,
		handleSubmit
	};
}
