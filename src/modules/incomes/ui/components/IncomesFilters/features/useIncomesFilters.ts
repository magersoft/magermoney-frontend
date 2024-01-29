import { useCalculations } from '@/modules/calculations';
import { useIncomes } from '@/modules/incomes';
import { useSettingsStore } from '@/modules/settings/infrastructure/stores';
import { AppFilterCalendarRange } from '@/shared/ui/components';

export function useIncomesFilters() {
	const { fetchIncomes, isLoading } = useIncomes();
	const { fetchTotalIncomes, fetchSummaryIncomesByCategories } =
		useCalculations();

	const { currency } = useSettingsStore();

	const handleConfirm = async (range: AppFilterCalendarRange) => {
		const startDate = range.startDate!.toISOString();
		const endDate = range.endDate!.toISOString();

		await Promise.all([
			fetchIncomes({ force: true }, { startDate, endDate }),
			fetchTotalIncomes(
				{ force: true },
				{ startDate, endDate, currency: unref(currency) }
			),
			fetchSummaryIncomesByCategories(
				{ force: true },
				{ startDate, endDate, currency: unref(currency) }
			)
		]);
	};

	const handleReset = async () => {
		await Promise.all([
			fetchIncomes({ force: true }),
			fetchTotalIncomes({ force: true }, { currency: unref(currency) }),
			fetchSummaryIncomesByCategories(
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
