import {
	useFetchAmountByPercentService,
	useFetchPercentByAmountService
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
	const { percentByAmount, roundedPercentByAmount, fetchPercentByAmount } =
		useFetchPercentByAmountService();
	const { amountByPercent, roundedAmountByPercent, fetchAmountByPercent } =
		useFetchAmountByPercentService();

	return {
		percentByAmount,
		roundedPercentByAmount,
		amountByPercent,
		roundedAmountByPercent,
		balanceAccumulationAmount,
		balanceMinusAccumulationPercent,
		balanceAccumulationCurrency,
		isLoading,
		fetchPercentByAmount,
		fetchAmountByPercent,
		restoreCalculationsStore
	};
}
