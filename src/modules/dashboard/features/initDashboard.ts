import { useCalculations } from '@/modules/calculations';
import { useSavedFunds } from '@/modules/savedFunds';
import { useSettingsStore } from '@/modules/settings/infrastructure/stores';

export const useInitDashboard = () => {
	const { currency } = useSettingsStore();
	const { fetchTotalBalance, fetchTotalIncomes, fetchTotalExpenses } =
		useCalculations();
	const { fetchSavedFunds } = useSavedFunds();

	const isLoading = ref(false);

	const fetchDashboard = async () => {
		isLoading.value = true;

		await Promise.all([
			fetchTotalBalance({ force: true }, unref(currency)),
			fetchTotalIncomes({ force: true }, unref(currency)),
			fetchTotalExpenses({ force: true }, unref(currency)),
			fetchSavedFunds({ force: true })
		]);

		isLoading.value = false;
	};

	return {
		fetchDashboard,
		isLoading
	};
};
