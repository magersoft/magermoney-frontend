import {
	useFetchAmountByPercentService,
	useFetchMonthlyBudgetService,
	useFetchPercentByAmountService,
	useFetchTotalBalanceService,
	useFetchTotalMonthlyExpensesService,
	useFetchTotalMonthlyIncomesService,
	useFetchTransferDetailsService
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
		transferDetails,
		restoreStore: restoreCalculationsStore,
		error
	} = useCalculationsStore();

	const { fetchTotalBalance } = useFetchTotalBalanceService();
	const { fetchTotalMonthlyIncomes } = useFetchTotalMonthlyIncomesService();
	const { fetchTotalMonthlyExpenses } = useFetchTotalMonthlyExpensesService();
	const { fetchMonthlyBudget } = useFetchMonthlyBudgetService();
	const { fetchPercentByAmount } = useFetchPercentByAmountService();
	const { fetchAmountByPercent } = useFetchAmountByPercentService();
	const { fetchTransferDetails } = useFetchTransferDetailsService();

	return {
		totalBalance,
		totalMonthlyIncomes,
		totalMonthlyExpenses,
		monthlyBudget,
		transferDetails,

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
		fetchTransferDetails,

		isLoading,
		restoreCalculationsStore,
		error
	};
}
