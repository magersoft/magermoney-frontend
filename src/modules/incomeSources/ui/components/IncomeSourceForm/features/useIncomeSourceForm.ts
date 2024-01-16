import { useCurrencies } from '@/modules/currencies';
import { useIncomeSources } from '@/modules/incomeSources';
import {
	initialIncomeSourceFormControls,
	TInitialIncomeSourceFormData
} from '@/modules/incomeSources/domain';
import { useForm } from '@/shared/features';
import { ActionButtonsEventListeners } from '@/shared/ui/components';
import { cloneDeep } from '@/shared/utils';

import { mappingIncomeSourceFormData } from '../utils';

interface UseIncomeSourceFormParams extends ActionButtonsEventListeners {}

export function useIncomeSourceForm({
	onAdd,
	onSubmit,
	onBack
}: UseIncomeSourceFormParams = {}) {
	const incomeSourceFormData = ref<TInitialIncomeSourceFormData>(
		cloneDeep(initialIncomeSourceFormControls)
	);
	const {
		hasIncomeSources,
		isLoading,
		error,
		fetchIncomeSources,
		createIncomeSource
	} = useIncomeSources();

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

	const handleBack = () => {
		resetValidationForm();

		onBack?.();
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
		handleSubmit,
		handleBack
	};
}
