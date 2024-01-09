import { useFetchHistoryService } from '@/modules/history/infrastructure/services';
import { useHistoryStore } from '@/modules/history/infrastructure/stores';
import { AppFilterCalendarRange } from '@/shared/ui/components';

export function useHistoryFilters() {
	const { fetchHistory } = useFetchHistoryService();
	const { isLoading } = useHistoryStore();

	const handleConfirm = async (range: AppFilterCalendarRange) => {
		const { startDate, endDate } = range;

		await fetchHistory(
			{ force: true },
			{ startDate: startDate!.toISOString(), endDate: endDate!.toISOString() }
		);
	};

	const handleReset = async () => {
		await fetchHistory({ force: true });
	};

	return {
		isLoading,
		handleConfirm,
		handleReset
	};
}
