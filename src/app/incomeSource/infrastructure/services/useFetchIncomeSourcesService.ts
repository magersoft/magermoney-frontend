import { useIncomeSourceModel } from '@/app/incomeSource/infrastructure/model';
import { useIncomeSourceStore } from '@/app/incomeSource/infrastructure/stores';
import { useBaseFetchList } from '@/shared/infrastructure/services';

export function useFetchIncomeSourcesService() {
	const { incomeSources, setIncomeSources, setIsLoading, setError } =
		useIncomeSourceStore();
	const { findAll } = useIncomeSourceModel();

	const { fetchBaseList: fetchIncomeSources } = useBaseFetchList({
		fetchData: findAll,
		setData: setIncomeSources,
		dataList: incomeSources,
		setIsLoading,
		setError
	});

	return {
		fetchIncomeSources
	};
}
