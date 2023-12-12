import {
	useFetchAmountByPercentService,
	useFetchMonthlyBudgetService,
	useFetchPercentByAmountService,
	useFetchTotalBalanceService,
	useFetchTotalMonthlyExpensesService,
	useFetchTotalMonthlyIncomesService
} from '@/modules/calculations/infrastructure/services';
import { useCalculationsStore } from '@/modules/calculations/infrastructure/stores';

export function useCalculations() {
	const {
		totalBalance,
		totalMonthlyIncomes,
		totalMonthlyExpenses,
		monthlyBudget,
		amountByPercent,
		roundedAmountByPercent,
		percentByAmount,
		roundedPercentByAmount,
		isLoading,
		balanceAccumulationAmount,
		balanceMinusAccumulationPercent,
		balanceAccumulationCurrency,
		restoreStore: restoreCalculationsStore
	} = useCalculationsStore();

	const { fetchTotalBalance } = useFetchTotalBalanceService();
	const { fetchTotalMonthlyIncomes } = useFetchTotalMonthlyIncomesService();
	const { fetchTotalMonthlyExpenses } = useFetchTotalMonthlyExpensesService();
	const { fetchMonthlyBudget } = useFetchMonthlyBudgetService();
	const { fetchPercentByAmount } = useFetchPercentByAmountService();
	const { fetchAmountByPercent } = useFetchAmountByPercentService();

	return {
		totalBalance,
		totalMonthlyIncomes,
		totalMonthlyExpenses,
		monthlyBudget,

		percentByAmount,
		roundedPercentByAmount,

		amountByPercent,
		roundedAmountByPercent,

		balanceAccumulationAmount,
		balanceMinusAccumulationPercent,
		balanceAccumulationCurrency,

		fetchTotalBalance,
		fetchTotalMonthlyIncomes,
		fetchTotalMonthlyExpenses,
		fetchMonthlyBudget,
		fetchPercentByAmount,
		fetchAmountByPercent,

		isLoading,
		restoreCalculationsStore
	};
}
