import { useSavedFundsModel } from '@/modules/savedFunds/infrastructure/models';
import { useSavedFundsStore } from '@/modules/savedFunds/infrastructure/stores';
import { useBaseFetchList } from '@/shared/infrastructure/services';

export function useFetchSavedFundsService() {
	const { savedFunds, setSavedFunds, setIsLoading, setError } =
		useSavedFundsStore();
	const { fetchAll } = useSavedFundsModel();

	const { fetchBaseList: fetchSavedFunds } = useBaseFetchList({
		fetchData: fetchAll,
		setData: setSavedFunds,
		dataList: savedFunds,
		setIsLoading,
		setError
	});

	return {
		fetchSavedFunds
	};
}
