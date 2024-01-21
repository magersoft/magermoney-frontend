import { PickerConfirmEventParams } from 'vant/es/picker/types';

import { useCategories } from '@/modules/categories';
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
	const {
		incomeCategoriesItems,
		isLoading: isLoadingCategories,
		fetchIncomeCategories
	} = useCategories();

	const {
		formRef,
		hasServerError,
		errorMessages,
		validateForm,
		resetValidationForm
	} = useForm(error);

	const handleConfirmIncomeSourcesPicker = ({
		selectedOptions
	}: PickerConfirmEventParams) => {
		const [option] = selectedOptions;

		if (option) {
			incomeSourceFormData.value = {
				...unref(incomeSourceFormData),
				title: option.text as string,
				categoryId: option.value as number
			};
		}
	};

	const handleUpdateIncomeSourcesTitle = (title?: string | number) => {
		incomeSourceFormData.value = {
			...unref(incomeSourceFormData),
			title: title as string,
			categoryId: undefined
		};
	};

	const handleSubmit = async () => {
		if (!unref(hasIncomeSources)) return;

		if (await validateForm()) {
			await handleAddSubmit();
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
			await fetchIncomeCategories({ force: true, quite: true });

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
		errorMessages,
		hasIncomeSources,
		currenciesItems,
		incomeCategoriesItems,
		isLoading,
		isLoadingCurrencies,
		isLoadingCategories,
		handleConfirmIncomeSourcesPicker,
		handleUpdateIncomeSourcesTitle,
		handleAddSubmit,
		handleSubmit,
		handleBack
	};
}
