import {
	useCreateSavedFundService,
	useFetchSavedFundService,
	useFetchSavedFundsService,
	useRemoveSavedFundService,
	useUpdateSavedFundService,
	useUpdateSavedFundsOrdersService
} from '@/modules/savedFunds/infrastructure/services';
import { useSavedFundsStore } from '@/modules/savedFunds/infrastructure/stores';
import { mappingSavedFundsForPicker } from '@/modules/savedFunds/utils';

export function useSavedFunds() {
	const {
		savedFund,
		savedFunds,
		countSavedFunds,
		hasSavedFunds,
		isLoading,
		error,
		setSavedFund
	} = useSavedFundsStore();
	const { fetchSavedFunds } = useFetchSavedFundsService();
	const { fetchSavedFund } = useFetchSavedFundService();
	const { createSavedFund } = useCreateSavedFundService();
	const { updateSavedFund } = useUpdateSavedFundService();
	const { updateSavedFundsOrders } = useUpdateSavedFundsOrdersService();
	const { removeSavedFund } = useRemoveSavedFundService();

	const savedFundsItems = computed(() =>
		mappingSavedFundsForPicker(unref(savedFunds))
	);

	const savedFundsItemsWithAmount = computed(() =>
		mappingSavedFundsForPicker(unref(savedFunds), true)
	);

	const resetSavedFund = () => {
		setSavedFund(null);
	};

	return {
		savedFunds,
		savedFundsItems,
		savedFundsItemsWithAmount,
		hasSavedFunds,
		countSavedFunds,
		savedFund,
		isLoading,
		error,

		fetchSavedFunds,
		fetchSavedFund,
		createSavedFund,
		updateSavedFund,
		updateSavedFundsOrders,
		removeSavedFund,

		resetSavedFund
	};
}
