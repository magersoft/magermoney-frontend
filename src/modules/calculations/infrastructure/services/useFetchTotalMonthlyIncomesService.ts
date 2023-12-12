import { useCalculationsModel } from '@/modules/calculations/infrastructure/models';
import { useCalculationsStore } from '@/modules/calculations/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useFetchTotalMonthlyIncomesService() {
	const { setTotalMonthlyIncomes, setIsLoading, setError } =
		useCalculationsStore();
	const { fetchTotalMonthlyIncomes: fetchData } = useCalculationsModel();

	const { fetchBase: fetchTotalMonthlyIncomes } = useBaseFetch({
		fetchData,
		setData: setTotalMonthlyIncomes,
		setIsLoading,
		setError
	});

	return {
		fetchTotalMonthlyIncomes
	};
}
