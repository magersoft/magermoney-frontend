import { useAccumulatedFundsModel } from '@/modules/accumulatedFunds/infrastructure/models';
import { useAccumulatedFundsStore } from '@/modules/accumulatedFunds/infrastructure/stores';
import { useBaseFetchList } from '@/shared/infrastructure/services';

export function useFetchAccumulatedFundsService() {
	const {
		accumulatedFunds,
		hasAccumulatedFunds,
		isLoading,
		setAccumulatedFunds,
		setIsLoading,
		setError
	} = useAccumulatedFundsStore();
	const { findAll } = useAccumulatedFundsModel();

	const { fetchBaseList: fetchAccumulatedFunds } = useBaseFetchList({
		fetchData: findAll,
		setData: setAccumulatedFunds,
		dataList: accumulatedFunds,
		setIsLoading,
		setError
	});

	return {
		accumulatedFunds,
		hasAccumulatedFunds,
		isLoading,
		fetchAccumulatedFunds
	};
}
