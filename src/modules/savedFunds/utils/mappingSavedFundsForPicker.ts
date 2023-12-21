import { useCurrencyFormat } from '@/modules/currencies';
import { NSavedFunds } from '@/modules/savedFunds/domain';

export function mappingSavedFundsForPicker(
	savedFunds: NSavedFunds.ISavedFund[],
	withAmount = false
) {
	const { formatAmountWithCurrency } = useCurrencyFormat();

	return savedFunds.map((savedFund) => ({
		...savedFund,
		text: withAmount
			? `${savedFund.source} - ${formatAmountWithCurrency(
					savedFund.amount,
					savedFund.currency.code
			  )}`
			: savedFund.source,
		value: savedFund.id
	}));
}
