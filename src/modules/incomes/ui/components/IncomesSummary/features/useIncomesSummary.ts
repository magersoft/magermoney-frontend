import { useCalculations } from '@/modules/calculations';
import { useSettingsStore } from '@/modules/settings/infrastructure/stores';

export function useIncomesSummary() {
	const {
		totalIncomes,
		summaryIncomesByCategories,
		hasSummaryIncomesByCategories,
		fetchSummaryIncomesByCategories,
		fetchTotalIncomes,
		isLoading
	} = useCalculations();
	const { currency } = useSettingsStore();

	const initialFetchData = async () => {
		await fetchTotalIncomes({}, { currency: unref(currency) });
		await fetchSummaryIncomesByCategories({}, { currency: unref(currency) });
	};

	return {
		totalIncomes,
		hasSummaryIncomesByCategories,
		summaryIncomesByCategories,
		isLoading,
		initialFetchData
	};
}
