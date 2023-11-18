import { useIncomeSourcesModel } from '@/modules/incomeSources/infrastructure/models';
import { useIncomeSourcesStore } from '@/modules/incomeSources/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useCreateIncomeSourceService() {
	const { setIncomeSource, setIsLoading, setError } = useIncomeSourcesStore();
	const { create } = useIncomeSourcesModel();

	const { fetchBase: createIncomeSource } = useBaseFetch({
		fetchData: create,
		setData: setIncomeSource,
		setIsLoading,
		setError
	});

	return {
		createIncomeSource
	};
}
