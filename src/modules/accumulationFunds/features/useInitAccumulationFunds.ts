import { useFetchAccumulationFundsService } from '@/modules/accumulationFunds/infrastructure/services';
import { useAccumulationFundStore } from '@/modules/accumulationFunds/infrastructure/stores';
import { useCalculations } from '@/modules/calculations';
import { useSettingsStore } from '@/modules/settings/infrastructure/stores';

export function useInitAccumulationFunds() {
	const { accumulationFundsPercent } = useAccumulationFundStore();
	const { fetchAccumulationFunds } = useFetchAccumulationFundsService();
	const { fetchAmountByPercent, fetchPercentByAmount, roundedAmountByPercent } =
		useCalculations();
	const { currency } = useSettingsStore();
	const isLoading = ref(false);

	const fetchInitAccumulationFunds = async () => {
		isLoading.value = true;

		await fetchAccumulationFunds({ force: true });
		await fetchAmountByPercent(
			{ force: true },
			unref(accumulationFundsPercent),
			unref(currency)
		);

		await fetchPercentByAmount(
			{ force: true },
			unref(roundedAmountByPercent),
			unref(currency)
		);

		isLoading.value = false;
	};

	return {
		fetchInitAccumulationFunds,
		isLoading
	};
}
