import { TInitialIncomeSourceFormData } from '@/app/incomeSource/domain';

export function mappingIncomeSourceFormData(
	formData: TInitialIncomeSourceFormData
): TInitialIncomeSourceFormData {
	return {
		...formData,
		amount: formData.amount.replaceAll(' ', '')
	};
}
