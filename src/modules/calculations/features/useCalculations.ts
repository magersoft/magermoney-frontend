import {
	useFetchAmountByPercentService,
	useFetchMonthlyBudgetService,
	useFetchPercentByAmountService,
	useFetchTotalBalanceService,
	useFetchTotalExpensesService,
	useFetchTotalIncomesService,
	useFetchTransferDetailsService
} from '@/modules/calculations/infrastructure/services';
import { useCalculationsStore } from '@/modules/calculations/infrastructure/stores';

export function useCalculations() {
	const {
		totalBalance,
		totalIncomes,
		totalExpenses,
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
	const { fetchTotalIncomes } = useFetchTotalIncomesService();
	const { fetchTotalExpenses } = useFetchTotalExpensesService();
	const { fetchMonthlyBudget } = useFetchMonthlyBudgetService();
	const { fetchPercentByAmount } = useFetchPercentByAmountService();
	const { fetchAmountByPercent } = useFetchAmountByPercentService();
	const { fetchTransferDetails } = useFetchTransferDetailsService();

	return {
		totalBalance,
		totalIncomes,
		totalExpenses,
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
		fetchTotalIncomes,
		fetchTotalExpenses,
		fetchMonthlyBudget,
		fetchPercentByAmount,
		fetchAmountByPercent,
		fetchTransferDetails,

		isLoading,
		restoreCalculationsStore,
		error
	};
}
