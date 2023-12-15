import { useIncomesModel } from '@/modules/incomes/infrastructure/models';
import { useIncomesStore } from '@/modules/incomes/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useFetchIncomesService() {
	const { setIncomes, setIsLoading, setError } = useIncomesStore();
	const { fetchAll } = useIncomesModel();

	const { fetchBase: fetchIncomes } = useBaseFetch({
		fetchData: fetchAll,
		setData: setIncomes,
		setIsLoading,
		setError
	});

	return {
		fetchIncomes
	};
}
