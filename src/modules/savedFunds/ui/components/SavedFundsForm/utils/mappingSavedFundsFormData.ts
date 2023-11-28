import { TInitialSavedFundsFormData } from '@/modules/savedFunds/domain';

export function mappingSavedFundsFormData(
	formData: TInitialSavedFundsFormData
): TInitialSavedFundsFormData {
	return {
		...formData,
		amount: formData.amount.replaceAll(' ', '')
	};
}
