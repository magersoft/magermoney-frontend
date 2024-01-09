import { useCalculations } from '@/modules/calculations';
import { useSettingsStore } from '@/modules/settings/infrastructure/stores';

export function useInitMonthlyBudgetSummary() {
	const { currency } = useSettingsStore();
	const { fetchMonthlyBudget } = useCalculations();

	const fetchData = async () => {
		await Promise.all([fetchMonthlyBudget({}, unref(currency))]);
	};

	fetchData();
}
