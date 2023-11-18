import { TInitialIncomeSourceFormData } from '@/modules/incomeSources/domain';

export function mappingIncomeSourceFormData(
	formData: TInitialIncomeSourceFormData
): TInitialIncomeSourceFormData {
	return {
		...formData,
		amount: formData.amount.replaceAll(' ', '')
	};
}
