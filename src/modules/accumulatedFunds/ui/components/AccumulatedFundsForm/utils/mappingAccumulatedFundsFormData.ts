import { TInitialAccumulatedFundsFormData } from '@/modules/accumulatedFunds/domain';

export function mappingAccumulatedFundsFormData(
	formData: TInitialAccumulatedFundsFormData
): TInitialAccumulatedFundsFormData {
	return {
		...formData,
		amount: formData.amount.replaceAll(' ', '')
	};
}
