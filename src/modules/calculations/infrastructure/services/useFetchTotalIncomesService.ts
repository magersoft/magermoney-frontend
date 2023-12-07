import { useCalculationsModel } from '@/modules/calculations/infrastructure/models';
import { useCalculationsStore } from '@/modules/calculations/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useFetchTotalIncomesService() {
	const { setTotalIncomes, setIsLoading, setError } = useCalculationsStore();
	const { fetchTotalIncomes: fetchIncomes } = useCalculationsModel();

	const { fetchBase: fetchTotalIncomes } = useBaseFetch({
		fetchData: fetchIncomes,
		setData: setTotalIncomes,
		setIsLoading,
		setError
	});

	return {
		fetchTotalIncomes
	};
}
