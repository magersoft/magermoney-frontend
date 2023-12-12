import { NIncomes, TInitialIncomeFormData } from '@/modules/incomes/domain';

export function mappingIncomeFormData(
	formData: TInitialIncomeFormData
): NIncomes.ICreateIncome {
	return {
		...formData,
		amount: Number(formData.amount.replaceAll(' ', '')),
		dateOfIssue: new Date(formData.dateOfIssue).toISOString()
	};
}
