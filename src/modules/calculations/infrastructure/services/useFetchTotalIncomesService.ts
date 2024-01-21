import { useCalculationsModel } from '@/modules/calculations/infrastructure/models';
import { useCalculationsStore } from '@/modules/calculations/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useFetchTotalIncomesService() {
	const { setTotalIncomes, setIsLoading, setError } = useCalculationsStore();
	const { fetchTotalIncomes: fetchData } = useCalculationsModel();

	const { fetchBase: fetchTotalIncomes } = useBaseFetch({
		fetchData,
		setData: setTotalIncomes,
		setIsLoading,
		setError
	});

	return {
		fetchTotalIncomes
	};
}
