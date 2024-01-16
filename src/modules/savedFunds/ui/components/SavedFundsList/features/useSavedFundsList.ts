import { useCurrencyFormat } from '@/modules/currencies';
import { useSavedFunds } from '@/modules/savedFunds';
import { NSavedFunds } from '@/modules/savedFunds/domain';

export function useSavedFundsList() {
	const { savedFunds, hasSavedFunds, fetchSavedFunds, removeSavedFund } =
		useSavedFunds();
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
