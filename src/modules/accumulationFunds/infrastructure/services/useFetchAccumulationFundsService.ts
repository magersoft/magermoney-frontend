import { useAccumulationFundsModel } from '@/modules/accumulationFunds/infrastructure/models';
import { useAccumulationFundStore } from '@/modules/accumulationFunds/infrastructure/stores';
import { useBaseFetchList } from '@/shared/infrastructure/services';

export function useFetchAccumulationFundsService() {
	const { accumulationFunds, setIsLoading, setAccumulationFunds, setError } =
		useAccumulationFundStore();
	const { fetchAll } = useAccumulationFundsModel();

	const { fetchBaseList: fetchAccumulationFunds } = useBaseFetchList({
		fetchData: fetchAll,
		setData: setAccumulationFunds,
		dataList: accumulationFunds,
		setIsLoading,
		setError
	});

	return {
		fetchAccumulationFunds
	};
}
