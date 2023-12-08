import { useCurrencies } from '@/modules/currencies';
import {
	initialExpenseSourcesFormControls,
	TInitialExpenseSourcesFormData
} from '@/modules/expenseSources/domain';
import {
	useCreateExpenseSourceService,
	useFetchExpenseSourcesService
} from '@/modules/expenseSources/infrastructure/services';
import { useExpenseSourcesStore } from '@/modules/expenseSources/infrastructure/stores';
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
	const { createExpenseSource } = useCreateExpenseSourceService();
	const { fetchExpenseSources } = useFetchExpenseSourcesService();
	const { hasExpenseSources, isLoading, error } = useExpenseSourcesStore();
	const { currenciesItems, isLoading: isLoadingCurrencies } = useCurrencies();

	const {
		formRef,
		hasServerError,
		errorMessages,
		validateForm,
		resetValidationForm
	} = useForm(error);

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
		isLoadingCurrencies,
		hasServerError,
		errorMessages,
		isLoading,
		hasExpenseSources,
		handleSubmit,
		handleAddSubmit,
		handleBack
	};
}
