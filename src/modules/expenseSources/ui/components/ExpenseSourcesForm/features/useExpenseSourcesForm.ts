import { PickerConfirmEventParams } from 'vant/es/picker/types';

import { useCategories } from '@/modules/categories';
import { useCurrencies } from '@/modules/currencies';
import { useExpenseSources } from '@/modules/expenseSources';
import {
	initialExpenseSourcesFormControls,
	TInitialExpenseSourcesFormData
} from '@/modules/expenseSources/domain';
import { mappingExpenseSourcesFormData } from '@/modules/expenseSources/ui/components/ExpenseSourcesForm/utils';
import { useForm } from '@/shared/features';
import { ActionButtonsEventListeners } from '@/shared/ui/components';
import { cloneDeep } from '@/shared/utils';

interface UseExpenseSourcesFormParams extends ActionButtonsEventListeners {}

export function useExpenseSourcesForm({
	onAdd,
	onSubmit,
	onBack
}: UseExpenseSourcesFormParams) {
	const expenseSourcesFormData = ref<TInitialExpenseSourcesFormData>(
		cloneDeep(initialExpenseSourcesFormControls)
	);
	const {
		hasExpenseSources,
		isLoading,
		error,
		fetchExpenseSources,
		createExpenseSource
	} = useExpenseSources();

	const { currenciesItems, isLoading: isLoadingCurrencies } = useCurrencies();
	const {
		expenseCategoriesItems,
		isLoading: isLoadingCategories,
		fetchExpenseCategories
	} = useCategories();

	const {
		formRef,
		hasServerError,
		errorMessages,
		validateForm,
		resetValidationForm
	} = useForm(error);

	const handleConfirmExpenseSourcesPicker = ({
		selectedOptions
	}: PickerConfirmEventParams) => {
		const [option] = selectedOptions;

		if (option) {
			expenseSourcesFormData.value = {
				...unref(expenseSourcesFormData),
				title: option.text as string,
				categoryId: option.value as number
			};
		}
	};

	const handleUpdateExpenseSourcesTitle = (title?: string | number) => {
		expenseSourcesFormData.value = {
			...unref(expenseSourcesFormData),
			title: title as string,
			categoryId: undefined
		};
	};

	const handleSubmit = async () => {
		if (!unref(hasExpenseSources)) return;

		if (await validateForm()) {
			await handleAddSubmit();
		}

		resetValidationForm();

		onSubmit?.();
	};

	const handleAddSubmit = async () => {
		if (!(await validateForm())) return;

		const response = await createExpenseSource(
			{},
			mappingExpenseSourcesFormData(unref(expenseSourcesFormData))
		);

		if (unref(response?.data)) {
			expenseSourcesFormData.value = {
				...initialExpenseSourcesFormControls
			};
		}

		await fetchExpenseSources({ force: true, quite: true });
		await fetchExpenseCategories({ force: true, quite: true });

		onAdd?.();
	};

	const handleBack = () => {
		resetValidationForm();

		onBack?.();
	};

	return {
		formRef,
		expenseSourcesFormData,
		currenciesItems,
		expenseCategoriesItems,
		hasServerError,
		errorMessages,
		isLoading,
		isLoadingCategories,
		isLoadingCurrencies,
		hasExpenseSources,
		handleConfirmExpenseSourcesPicker,
		handleUpdateExpenseSourcesTitle,
		handleSubmit,
		handleAddSubmit,
		handleBack
	};
}
