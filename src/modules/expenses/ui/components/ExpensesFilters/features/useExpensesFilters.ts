import { useFetchExpensesService } from '@/modules/expenses/infrastructure/services';
import { useExpensesStore } from '@/modules/expenses/infrastructure/stores';
import { AppFilterCalendarRange } from '@/shared/ui/components';

export function useExpensesFilters() {
	const { fetchExpenses } = useFetchExpensesService();
	const { isLoading } = useExpensesStore();

	const handleConfirm = async (range: AppFilterCalendarRange) => {
		const { startDate, endDate } = range;

		await fetchExpenses(
			{ force: true },
			{
				startDate: startDate!.toISOString(),
				endDate: endDate!.toISOString()
			}
		);
	};

	const handleReset = async () => {
		await fetchExpenses({ force: true });
	};

	return {
		isLoading,
		handleConfirm,
		handleReset
	};
}
