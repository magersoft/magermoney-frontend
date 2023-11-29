import { TInitialSavedFundsFormData } from '@/modules/savedFunds/domain';
import { trimString } from '@/shared/utils';

export function mappingSavedFundsFormData(
	formData: TInitialSavedFundsFormData
): TInitialSavedFundsFormData {
	return {
		...formData,
		amount: trimString(formData.amount)
	};
}
