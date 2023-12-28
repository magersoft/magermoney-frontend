import { useFetchIncomesService } from '@/modules/incomes/infrastructure/services';
import { useIncomesStore } from '@/modules/incomes/infrastructure/stores';
import { AppFilterCalendarRange } from '@/shared/ui/components';

export function useIncomesFilters() {
	const { fetchIncomes } = useFetchIncomesService();
	const { isLoading } = useIncomesStore();

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
