import { NAccumulatedFunds } from '@/modules/accumulatedFunds/domain';
import {
	useFetchAccumulatedFundsService,
	useRemoveAccumulatedFundService
} from '@/modules/accumulatedFunds/infrastructure/services';
import { useCurrencyFormat } from '@/shared/features';

export function useAccumulatedFundsList() {
	const { accumulatedFunds, hasAccumulatedFunds, fetchAccumulatedFunds } =
		useFetchAccumulatedFundsService();
	const { removeAccumulatedFund } = useRemoveAccumulatedFundService();
	const { formatAmountWithCurrency } = useCurrencyFormat();

	const handleRemove = async (
		accumulatedFund: NAccumulatedFunds.IAccumulatedFund
	) => {
		const isRemovedSuccess = await removeAccumulatedFund(
			accumulatedFund.source,
			accumulatedFund.id
		);

		if (isRemovedSuccess) {
			fetchAccumulatedFunds({ force: true, quite: true });
		}
	};

	return {
		accumulatedFunds,
		hasAccumulatedFunds,
		formatAmountWithCurrency,
		handleRemove
	};
}
