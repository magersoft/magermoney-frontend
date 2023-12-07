import {
	NSavedFunds,
	TInitialSavedFundsFormData
} from '@/modules/savedFunds/domain';
import { trimString } from '@/shared/utils';

export function mappingSavedFundsFormData(
	formData: TInitialSavedFundsFormData
): NSavedFunds.ICreateSavedFund {
	return {
		...formData,
		amount: Number(trimString(formData.amount))
	};
}
