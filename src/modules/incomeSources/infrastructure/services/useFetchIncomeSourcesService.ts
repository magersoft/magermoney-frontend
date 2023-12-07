import { useIncomeSourcesModel } from '@/modules/incomeSources/infrastructure/models';
import { useIncomeSourcesStore } from '@/modules/incomeSources/infrastructure/stores';
import { useBaseFetchList } from '@/shared/infrastructure/services';

export function useFetchIncomeSourcesService() {
	const { incomeSources, setIncomeSources, setIsLoading, setError } =
		useIncomeSourcesStore();
	const { fetchAll } = useIncomeSourcesModel();

	const { fetchBaseList: fetchIncomeSources } = useBaseFetchList({
		fetchData: fetchAll,
		setData: setIncomeSources,
		dataList: incomeSources,
		setIsLoading,
		setError
	});

	return {
		fetchIncomeSources
	};
}
