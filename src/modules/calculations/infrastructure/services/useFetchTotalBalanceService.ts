import { useCalculationsModel } from '@/modules/calculations/infrastructure/models';
import { useCalculationsStore } from '@/modules/calculations/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useFetchTotalBalanceService() {
	const { setTotalBalance, setIsLoading, setError } = useCalculationsStore();
	const { fetchTotalBalance: fetchBalance } = useCalculationsModel();

	const { fetchBase: fetchTotalBalance } = useBaseFetch({
		fetchData: fetchBalance,
		setData: setTotalBalance,
		setIsLoading,
		setError
	});

	return {
		fetchTotalBalance
	};
}
