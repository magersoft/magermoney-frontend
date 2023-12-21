import { useCalculationsModel } from '@/modules/calculations/infrastructure/models';
import { useCalculationsStore } from '@/modules/calculations/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useFetchTransferDetailsService() {
	const { setTransferDetails, setIsLoading, setError } = useCalculationsStore();
	const { fetchTransferDetails: fetchData } = useCalculationsModel();

	const { fetchBase: fetchTransferDetails } = useBaseFetch({
		fetchData,
		setData: setTransferDetails,
		setIsLoading,
		setError
	});

	return {
		fetchTransferDetails
	};
}
