import { useIncomeSourcesModel } from '@/modules/incomeSources/infrastructure/models';
import { useIncomeSourcesStore } from '@/modules/incomeSources/infrastructure/stores';
import { useBaseFetchList } from '@/shared/infrastructure/services';

export function useFetchIncomeSourcesService() {
	const {
		incomeSources,
		hasIncomeSources,
		isLoading,
		setIncomeSources,
		setIsLoading,
		setError
	} = useIncomeSourcesStore();
	const { findAll } = useIncomeSourcesModel();

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
