import { useSavedFundsModel } from '@/modules/savedFunds/infrastructure/models';
import { useSavedFundsStore } from '@/modules/savedFunds/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useFetchSavedFundService() {
	const { setSavedFund, setIsLoading, setError } = useSavedFundsStore();
	const { fetchOne } = useSavedFundsModel();

	const { fetchBase: fetchSavedFund } = useBaseFetch({
		fetchData: fetchOne,
		setData: setSavedFund,
		setIsLoading,
		setError
	});

	return {
		fetchSavedFund
	};
}
