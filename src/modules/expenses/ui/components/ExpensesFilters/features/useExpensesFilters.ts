import { useCalculations } from '@/modules/calculations';
import { useExpenses } from '@/modules/expenses';
import { useSettingsStore } from '@/modules/settings/infrastructure/stores';
import { AppFilterCalendarRange } from '@/shared/ui/components';

export function useExpensesFilters() {
	const { fetchExpenses, isLoading } = useExpenses();
	const { fetchTotalExpenses, fetchSummaryExpensesByCategories } =
		useCalculations();

	const { currency } = useSettingsStore();

	const handleConfirm = async (range: AppFilterCalendarRange) => {
		const startDate = range.startDate!.toISOString();
		const endDate = range.endDate!.toISOString();

		await Promise.all([
			fetchExpenses({ force: true }, { startDate, endDate }),
			fetchTotalExpenses(
				{ force: true },
				{ startDate, endDate, currency: unref(currency) }
			),
			fetchSummaryExpensesByCategories(
				{ force: true },
				{ startDate, endDate, currency: unref(currency) }
			)
		]);
	};

	const handleReset = async () => {
		await Promise.all([
			fetchExpenses({ force: true }),
			fetchTotalExpenses({ force: true }, { currency: unref(currency) }),
			fetchSummaryExpensesByCategories(
				{ force: true },
				{ currency: unref(currency) }
			)
		]);
	};

	return {
		isLoading,
		handleConfirm,
		handleReset
	};
}
