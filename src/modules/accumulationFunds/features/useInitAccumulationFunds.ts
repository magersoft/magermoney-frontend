import { useFetchAccumulationFundsService } from '@/modules/accumulationFunds/infrastructure/services';
import { useCalculations } from '@/modules/calculations';
import { useSettingsStore } from '@/modules/settings/infrastructure/stores';

export function useInitAccumulationFunds() {
	const { fetchAccumulationFunds, accumulationFundsPercent } =
		useFetchAccumulationFundsService();
	const { fetchAmountByPercent, fetchPercentByAmount, roundedAmountByPercent } =
		useCalculations();
	const { currency } = useSettingsStore();

	const fetchInitAccumulationFunds = async () => {
		await fetchAccumulationFunds({ force: true, quite: true });
		await fetchAmountByPercent(
			{ force: true, quite: true },
			unref(accumulationFundsPercent),
			unref(currency)
		);

		await fetchPercentByAmount(
			{ force: true, quite: true },
			unref(roundedAmountByPercent),
			unref(currency)
		);
	};

	return {
		fetchInitAccumulationFunds
	};
}
