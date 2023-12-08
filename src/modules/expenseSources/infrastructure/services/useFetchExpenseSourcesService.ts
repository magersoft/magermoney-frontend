import { useExpenseSourcesModel } from '@/modules/expenseSources/infrastructure/models';
import { useExpenseSourcesStore } from '@/modules/expenseSources/infrastructure/stores';
import { useBaseFetchList } from '@/shared/infrastructure/services';

export function useFetchExpenseSourcesService() {
	const { expenseSources, setExpenseSources, setIsLoading, setError } =
		useExpenseSourcesStore();
	const { fetchAll } = useExpenseSourcesModel();

	const { fetchBaseList: fetchExpenseSources } = useBaseFetchList({
		fetchData: fetchAll,
		setData: setExpenseSources,
		dataList: expenseSources,
		setIsLoading,
		setError
	});

	return {
		fetchExpenseSources
	};
}
