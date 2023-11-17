import { useIncomeSourceModel } from '@/modules/incomeSource/infrastructure/model';
import { useIncomeSourceStore } from '@/modules/incomeSource/infrastructure/stores';
import { useBaseFetchList } from '@/shared/infrastructure/services';

export function useFetchIncomeSourcesService() {
	const {
		incomeSources,
		hasIncomeSources,
		isLoading,
		setIncomeSources,
		setIsLoading,
		setError
	} = useIncomeSourceStore();
	const { findAll } = useIncomeSourceModel();

	const { fetchBaseList: fetchIncomeSources } = useBaseFetchList({
		fetchData: findAll,
		setData: setIncomeSources,
		dataList: incomeSources,
		setIsLoading,
		setError
	});

	return {
		incomeSources,
		hasIncomeSources,
		isLoading,
		fetchIncomeSources
	};
}
