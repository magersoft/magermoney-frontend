import { useCalculationsModel } from '@/modules/calculations/infrastructure/models';
import { useCalculationsStore } from '@/modules/calculations/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useFetchPercentByAmountService() {
	const { setPercentByAmount, setIsLoading, setError } = useCalculationsStore();
	const { fetchPercentByAmount: fetchPercent } = useCalculationsModel();

	const { fetchBase: fetchPercentByAmount } = useBaseFetch({
		fetchData: fetchPercent,
		setData: setPercentByAmount,
		setIsLoading,
		setError
	});

	return {
		fetchPercentByAmount
	};
}
