import { useAccumulatedFundsModel } from '@/modules/accumulatedFunds/infrastructure/models';
import { useAccumulatedFundsStore } from '@/modules/accumulatedFunds/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useCreateAccumulatedFundService() {
	const { setAccumulatedFund, setIsLoading, setError } =
		useAccumulatedFundsStore();
	const { create } = useAccumulatedFundsModel();

	const { fetchBase: createAccumulatedFund } = useBaseFetch({
		fetchData: create,
		setData: setAccumulatedFund,
		setIsLoading,
		setError
	});

	return {
		createAccumulatedFund
	};
}
