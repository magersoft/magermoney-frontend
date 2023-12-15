import { useSavedFundsModel } from '@/modules/savedFunds/infrastructure/models';
import { useSavedFundsStore } from '@/modules/savedFunds/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useUpdateSavedFundsOrdersService() {
	const { setSavedFunds, setIsLoading, setError } = useSavedFundsStore();
	const { updateOrders } = useSavedFundsModel();

	const { fetchBase: updateSavedFundsOrders } = useBaseFetch({
		fetchData: updateOrders,
		setData: setSavedFunds,
		setIsLoading,
		setError
	});

	return {
		updateSavedFundsOrders
	};
}
