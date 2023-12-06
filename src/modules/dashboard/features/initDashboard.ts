import { useCalculations } from '@/modules/calculations';
import { useSettingsStore } from '@/modules/settings/infrastructure/stores';

export const useInitDashboard = () => {
	const { currency } = useSettingsStore();
	const { fetchTotalBalance } = useCalculations();

	const isLoading = ref(false);

	const fetchDashboard = async () => {
		isLoading.value = true;

		await Promise.all([fetchTotalBalance({}, unref(currency))]);

		isLoading.value = false;
	};

	return {
		fetchDashboard,
		isLoading
	};
};
