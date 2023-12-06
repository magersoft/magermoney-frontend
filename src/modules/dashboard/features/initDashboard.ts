import { useCalculations } from '@/modules/calculations';
import { useSettingsStore } from '@/modules/settings/infrastructure/stores';

export const useInitDashboard = () => {
	const { currency } = useSettingsStore();
	const { fetchTotalBalance } = useCalculations();

	const fetchDashboard = async () => {
		await Promise.all([fetchTotalBalance({}, unref(currency))]);
	};

	return {
		fetchDashboard
	};
};
