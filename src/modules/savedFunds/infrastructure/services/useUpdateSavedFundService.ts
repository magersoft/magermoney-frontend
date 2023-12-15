import { useSavedFundsModel } from '@/modules/savedFunds/infrastructure/models';
import { useSavedFundsStore } from '@/modules/savedFunds/infrastructure/stores';
import { useBaseUpdate } from '@/shared/infrastructure/services';

export function useUpdateSavedFundService() {
	const { savedFund, setSavedFund, setIsLoading, setError } =
		useSavedFundsStore();
	const { update } = useSavedFundsModel();

	const { updateBase: updateSavedFund } = useBaseUpdate({
		updateData: update,
		data: savedFund,
		setData: setSavedFund,
		setIsLoading,
		setError
	});

	return {
		updateSavedFund
	};
}
