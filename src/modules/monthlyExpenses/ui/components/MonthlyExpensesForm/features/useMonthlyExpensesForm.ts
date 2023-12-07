import { useCurrencies } from '@/modules/currencies';
import {
	initialMonthlyExpensesFormControls,
	TInitialMonthlyExpensesFormData
} from '@/modules/monthlyExpenses/domain';
import {
	useCreateMonthlyExpenseService,
	useFetchMonthlyExpensesService
} from '@/modules/monthlyExpenses/infrastructure/services';
import { useMonthlyExpensesStore } from '@/modules/monthlyExpenses/infrastructure/stores';
import { mappingMonthlyExpensesFormData } from '@/modules/monthlyExpenses/ui/components/MonthlyExpensesForm/utils';
import { useForm } from '@/shared/features';
import { ActionButtonsEventListeners } from '@/shared/ui/components';
import { cloneDeep } from '@/shared/utils';

interface UseMonthlyExpensesFormParams extends ActionButtonsEventListeners {}

export function useMonthlyExpensesForm({
	onAdd,
	onSubmit,
	onBack
}: UseMonthlyExpensesFormParams) {
	const monthlyExpensesFormData = ref<TInitialMonthlyExpensesFormData>(
		cloneDeep(initialMonthlyExpensesFormControls)
	);
	const { createMonthlyExpense } = useCreateMonthlyExpenseService();
	const { fetchMonthlyExpenses } = useFetchMonthlyExpensesService();
	const { hasMonthlyExpenses, isLoading, error } = useMonthlyExpensesStore();
	const { currenciesItems, isLoading: isLoadingCurrencies } = useCurrencies();

	const {
		formRef,
		hasServerError,
		errorMessages,
		validateForm,
		resetValidationForm
	} = useForm(error);

	const handleSubmit = async () => {
		if (!unref(hasMonthlyExpenses)) return;

		if (await validateForm()) {
			await handleAddSubmit();
		}

		resetValidationForm();

		onSubmit?.();
	};

	const handleAddSubmit = async () => {
		if (!(await validateForm())) return;

		const response = await createMonthlyExpense(
			{},
			mappingMonthlyExpensesFormData(unref(monthlyExpensesFormData))
		);

		if (unref(response?.data)) {
			monthlyExpensesFormData.value = {
				...initialMonthlyExpensesFormControls
			};
		}

		await fetchMonthlyExpenses({ force: true, quite: true });

		onAdd?.();
	};

	const handleBack = () => {
		resetValidationForm();

		onBack?.();
	};

	return {
		formRef,
		monthlyExpensesFormData,
		currenciesItems,
		isLoadingCurrencies,
		hasServerError,
		errorMessages,
		isLoading,
		hasMonthlyExpenses,
		handleSubmit,
		handleAddSubmit,
		handleBack
	};
}
