import { useCalculations } from '@/modules/calculations';
import { useSettingsStore } from '@/modules/settings/infrastructure/stores';

export function useExpensesSummary() {
	const {
		totalExpenses,
		summaryExpensesByCategories,
		hasSummaryExpensesByCategories,
		fetchSummaryExpensesByCategories,
		fetchTotalExpenses,
		isLoading
	} = useCalculations();
	const { currency } = useSettingsStore();

	const initialFetchData = async () => {
		await fetchTotalExpenses({}, { currency: unref(currency) });
		await fetchSummaryExpensesByCategories({}, { currency: unref(currency) });
	};

	return {
		totalExpenses,
		hasSummaryExpensesByCategories,
		summaryExpensesByCategories,
		isLoading,
		initialFetchData
	};
}
