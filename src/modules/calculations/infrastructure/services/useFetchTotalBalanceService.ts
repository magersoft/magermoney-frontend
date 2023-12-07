import { useCalculationsModel } from '@/modules/calculations/infrastructure/models';
import { useCalculationsStore } from '@/modules/calculations/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useFetchTotalBalanceService() {
	const { setTotalBalance, setIsLoading, setError } = useCalculationsStore();
	const { fetchTotalBalance: fetchData } = useCalculationsModel();

	const { fetchBase: fetchTotalBalance } = useBaseFetch({
		fetchData,
		setData: setTotalBalance,
		setIsLoading,
		setError
	});

	return {
		fetchTotalBalance
	};
}
