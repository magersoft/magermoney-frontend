import { useSavedFundsModel } from '@/modules/savedFunds/infrastructure/models';
import { useSavedFundsStore } from '@/modules/savedFunds/infrastructure/stores';
import { useBaseFetchList } from '@/shared/infrastructure/services';

export function useFetchSavedFundsService() {
	const {
		savedFunds,
		hasSavedFunds,
		isLoading,
		setSavedFunds,
		setIsLoading,
		setError
	} = useSavedFundsStore();
	const { findAll } = useSavedFundsModel();

	const { fetchBaseList: fetchSavedFunds } = useBaseFetchList({
		fetchData: findAll,
		setData: setSavedFunds,
		dataList: savedFunds,
		setIsLoading,
		setError
	});

	return {
		savedFunds,
		hasSavedFunds,
		isLoading,
		fetchSavedFunds
	};
}
