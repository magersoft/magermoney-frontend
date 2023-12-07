import { useCurrencyFormat } from '@/modules/currencies';
import { NSavedFunds } from '@/modules/savedFunds/domain';
import {
	useFetchSavedFundsService,
	useRemoveSavedFundService
} from '@/modules/savedFunds/infrastructure/services';
import { useSavedFundsStore } from '@/modules/savedFunds/infrastructure/stores';

export function useSavedFundsList() {
	const { savedFunds, hasSavedFunds } = useSavedFundsStore();
	const { fetchSavedFunds } = useFetchSavedFundsService();
	const { removeSavedFund } = useRemoveSavedFundService();
	const { formatAmountWithCurrency } = useCurrencyFormat();

	const handleRemove = async (savedFund: NSavedFunds.ISavedFund) => {
		const isRemovedSuccess = await removeSavedFund(
			savedFund.source,
			savedFund.id
		);

		if (isRemovedSuccess) {
			fetchSavedFunds({ force: true, quite: true });
		}
	};

	return {
		savedFunds,
		hasSavedFunds,
		formatAmountWithCurrency,
		handleRemove
	};
}
