import { useFetchSavedFundsService } from '@/modules/savedFunds/infrastructure/services';
import { useSavedFundsStore } from '@/modules/savedFunds/infrastructure/stores';

export function useSavedFunds() {
	const { savedFunds, isLoading } = useSavedFundsStore();
	const { fetchSavedFunds } = useFetchSavedFundsService();

	return {
		fetchSavedFunds,
		savedFunds,
		isLoading
	};
}
