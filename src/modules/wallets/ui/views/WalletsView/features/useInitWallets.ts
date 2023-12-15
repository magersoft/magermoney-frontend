import { useCalculations } from '@/modules/calculations';
import { useSavedFunds } from '@/modules/savedFunds';
import { useSettingsStore } from '@/modules/settings/infrastructure/stores';

export function useInitWallets() {
	const { currency } = useSettingsStore();
	const { fetchTotalBalance } = useCalculations();
	const { fetchSavedFunds } = useSavedFunds();

	const isLoading = ref(false);

	const fetchWallets = async () => {
		isLoading.value = true;

		await Promise.all([
			fetchTotalBalance({ force: true, showError: true }, unref(currency)),
			fetchSavedFunds({ force: true, showError: true })
		]);

		isLoading.value = false;
	};

	return {
		isLoading,
		fetchWallets
	};
}
