import { useCalculationsModel } from '@/modules/calculations/infrastructure/models';
import { useCalculationsStore } from '@/modules/calculations/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useFetchAmountByPercentService() {
	const { setAmountByPercent, setIsLoading, setError } = useCalculationsStore();
	const { fetchAmountByPercent: fetchAmount } = useCalculationsModel();

	const { fetchBase: fetchAmountByPercent } = useBaseFetch({
		fetchData: fetchAmount,
		setData: setAmountByPercent,
		setIsLoading,
		setError
	});

	return {
		fetchAmountByPercent
	};
}
