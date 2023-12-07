import {
	NIncomeSources,
	TInitialIncomeSourceFormData
} from '@/modules/incomeSources/domain';

export function mappingIncomeSourceFormData(
	formData: TInitialIncomeSourceFormData
): NIncomeSources.ICreateIncomeSource {
	return {
		...formData,
		amount: Number(formData.amount.replaceAll(' ', ''))
	};
}
