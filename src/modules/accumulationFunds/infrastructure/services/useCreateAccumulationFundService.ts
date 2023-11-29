import { useAccumulationFundsModel } from '@/modules/accumulationFunds/infrastructure/models';
import { useAccumulationFundStore } from '@/modules/accumulationFunds/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useCreateAccumulationFundService() {
	const { setAccumulationFund, setIsLoading, setError } =
		useAccumulationFundStore();
	const { create } = useAccumulationFundsModel();

	const { fetchBase: createAccumulationFund } = useBaseFetch({
		fetchData: create,
		setData: setAccumulationFund,
		setIsLoading,
		setError
	});

	return {
		createAccumulationFund
	};
}
