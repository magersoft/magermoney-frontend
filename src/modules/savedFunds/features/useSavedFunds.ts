import { useFetchSavedFundsService } from '@/modules/savedFunds/infrastructure/services';
import { useSavedFundsStore } from '@/modules/savedFunds/infrastructure/stores';

export function useSavedFunds() {
	const { savedFunds } = useSavedFundsStore();
	const { fetchSavedFunds } = useFetchSavedFundsService();

	return {
		fetchSavedFunds,
		savedFunds
	};
}
