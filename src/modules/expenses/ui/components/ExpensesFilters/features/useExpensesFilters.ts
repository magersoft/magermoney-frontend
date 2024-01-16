import { useExpenses } from '@/modules/expenses';
import { AppFilterCalendarRange } from '@/shared/ui/components';

export function useExpensesFilters() {
	const { fetchExpenses, isLoading } = useExpenses();

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
