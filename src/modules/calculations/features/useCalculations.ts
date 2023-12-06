import {
	useFetchAmountByPercentService,
	useFetchPercentByAmountService,
	useFetchTotalBalanceService
} from '@/modules/calculations/infrastructure/services';
import { useCalculationsStore } from '@/modules/calculations/infrastructure/stores';

export function useCalculations() {
	const {
		isLoading,
		balanceAccumulationAmount,
		balanceMinusAccumulationPercent,
		balanceAccumulationCurrency,
		restoreStore: restoreCalculationsStore
	} = useCalculationsStore();

	const { totalBalance, fetchTotalBalance } = useFetchTotalBalanceService();
	const { percentByAmount, roundedPercentByAmount, fetchPercentByAmount } =
		useFetchPercentByAmountService();
	const { amountByPercent, roundedAmountByPercent, fetchAmountByPercent } =
		useFetchAmountByPercentService();

	return {
		totalBalance,

		percentByAmount,
		roundedPercentByAmount,

		amountByPercent,
		roundedAmountByPercent,

		balanceAccumulationAmount,
		balanceMinusAccumulationPercent,
		balanceAccumulationCurrency,

		fetchPercentByAmount,
		fetchAmountByPercent,
		fetchTotalBalance,

		isLoading,
		restoreCalculationsStore
	};
}
