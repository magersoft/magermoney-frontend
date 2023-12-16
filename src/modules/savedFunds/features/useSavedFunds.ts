import {
	useFetchSavedFundService,
	useFetchSavedFundsService,
	useRemoveSavedFundService,
	useUpdateSavedFundService,
	useUpdateSavedFundsOrdersService
} from '@/modules/savedFunds/infrastructure/services';
import { useSavedFundsStore } from '@/modules/savedFunds/infrastructure/stores';
import { mappingSavedFundsForPicker } from '@/modules/savedFunds/utils';

export function useSavedFunds() {
	const { savedFund, savedFunds, countSavedFunds, hasSavedFunds, isLoading } =
		useSavedFundsStore();
	const { fetchSavedFunds } = useFetchSavedFundsService();
	const { fetchSavedFund } = useFetchSavedFundService();
	const { updateSavedFund } = useUpdateSavedFundService();
	const { updateSavedFundsOrders } = useUpdateSavedFundsOrdersService();
	const { removeSavedFund } = useRemoveSavedFundService();

	const savedFundsItems = computed(() =>
		mappingSavedFundsForPicker(unref(savedFunds))
	);

	return {
		fetchSavedFunds,
		fetchSavedFund,
		updateSavedFund,
		updateSavedFundsOrders,
		removeSavedFund,
		hasSavedFunds,
		savedFunds,
		savedFundsItems,
		countSavedFunds,
		savedFund,
		isLoading
	};
}
