import {
	useFetchAmountByPercentService,
	useFetchPercentByAmountService,
	useFetchTotalBalanceService,
	useFetchTotalExpensesService,
	useFetchTotalIncomesService
} from '@/modules/calculations/infrastructure/services';
import { useCalculationsStore } from '@/modules/calculations/infrastructure/stores';

export function useCalculations() {
	const {
		totalBalance,
		totalIncomes,
		totalExpenses,
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
	const { fetchTotalIncomes } = useFetchTotalIncomesService();
	const { fetchTotalExpenses } = useFetchTotalExpensesService();
	const { fetchPercentByAmount } = useFetchPercentByAmountService();
	const { fetchAmountByPercent } = useFetchAmountByPercentService();

	return {
		totalBalance,
		totalIncomes,
		totalExpenses,

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
		fetchPercentByAmount,
		fetchAmountByPercent,

		isLoading,
		restoreCalculationsStore
	};
}
