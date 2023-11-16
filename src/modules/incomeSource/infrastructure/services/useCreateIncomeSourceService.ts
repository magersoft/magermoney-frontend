import { useIncomeSourceModel } from '@/modules/incomeSource/infrastructure/model';
import { useIncomeSourceStore } from '@/modules/incomeSource/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useCreateIncomeSourceService() {
	const { setIncomeSource, setIsLoading, setError } = useIncomeSourceStore();
	const { create } = useIncomeSourceModel();

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
