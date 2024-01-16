import { useIncomes } from '@/modules/incomes';
import { AppFilterCalendarRange } from '@/shared/ui/components';

export function useIncomesFilters() {
	const { fetchIncomes, isLoading } = useIncomes();

	const handleConfirm = async (range: AppFilterCalendarRange) => {
		const { startDate, endDate } = range;

		await fetchIncomes(
			{ force: true },
			{
				startDate: startDate!.toISOString(),
				endDate: endDate!.toISOString()
			}
		);
	};

	const handleReset = async () => {
		await fetchIncomes({ force: true });
	};

	return {
		isLoading,
		handleConfirm,
		handleReset
	};
}
