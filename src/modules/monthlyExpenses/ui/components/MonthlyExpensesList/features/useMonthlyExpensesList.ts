import { useCurrencyFormat } from '@/modules/currencies';
import { NMonthlyExpenses } from '@/modules/monthlyExpenses/domain';
import {
	useFetchMonthlyExpensesService,
	useRemoveMonthlyExpenseService
} from '@/modules/monthlyExpenses/infrastructure/services';
import { useMonthlyExpensesStore } from '@/modules/monthlyExpenses/infrastructure/stores';

export function useMonthlyExpensesList() {
	const { monthlyExpenses, hasMonthlyExpenses } = useMonthlyExpensesStore();
	const { fetchMonthlyExpenses } = useFetchMonthlyExpensesService();
	const { removeMonthlyExpense } = useRemoveMonthlyExpenseService();
	const { formatAmountWithCurrency } = useCurrencyFormat();

	const handleRemove = async (
		monthlyExpense: NMonthlyExpenses.IMonthlyExpense
	) => {
		const isRemovedSuccess = await removeMonthlyExpense(
			monthlyExpense.title,
			monthlyExpense.id
		);

		if (isRemovedSuccess) {
			fetchMonthlyExpenses({ force: true, quite: true });
		}
	};

	return {
		monthlyExpenses,
		hasMonthlyExpenses,
		formatAmountWithCurrency,
		handleRemove
	};
}
