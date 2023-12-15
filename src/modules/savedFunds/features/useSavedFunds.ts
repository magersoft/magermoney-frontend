import {
	useFetchSavedFundsService,
	useUpdateSavedFundService,
	useUpdateSavedFundsOrdersService
} from '@/modules/savedFunds/infrastructure/services';
import { useSavedFundsStore } from '@/modules/savedFunds/infrastructure/stores';
import { mappingSavedFundsForPicker } from '@/modules/savedFunds/utils';

export function useSavedFunds() {
	const { savedFunds, countSavedFunds, hasSavedFunds, isLoading } =
		useSavedFundsStore();
	const { fetchSavedFunds } = useFetchSavedFundsService();
	const { updateSavedFund } = useUpdateSavedFundService();
	const { updateSavedFundsOrders } = useUpdateSavedFundsOrdersService();

	const savedFundsItems = computed(() =>
		mappingSavedFundsForPicker(unref(savedFunds))
	);

	return {
		fetchSavedFunds,
		updateSavedFund,
		updateSavedFundsOrders,
		hasSavedFunds,
		savedFunds,
		savedFundsItems,
		countSavedFunds,
		isLoading
	};
}
