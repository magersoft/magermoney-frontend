import { useSavedFundsModel } from '@/modules/savedFunds/infrastructure/models';
import { useSavedFundsStore } from '@/modules/savedFunds/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useCreateSavedFundService() {
	const { setSavedFund, setIsLoading, setError } = useSavedFundsStore();
	const { create } = useSavedFundsModel();

	const { fetchBase: createSavedFund } = useBaseFetch({
		fetchData: create,
		setData: setSavedFund,
		setIsLoading,
		setError
	});

	return {
		createSavedFund
	};
}
