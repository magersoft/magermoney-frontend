import { NSavedFunds } from '@/modules/savedFunds/domain';

export function mappingSavedFundsForPicker(
	savedFunds: NSavedFunds.ISavedFund[]
) {
	return savedFunds.map((savedFund) => ({
		...savedFund,
		text: savedFund.source,
		value: savedFund.id
	}));
}
