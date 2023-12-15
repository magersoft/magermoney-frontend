import { NExpenses, TInitialExpenseFormData } from '@/modules/expenses/domain';

export function mappingExpenseFormData(
	formData: TInitialExpenseFormData
): NExpenses.ICreateExpense {
	return {
		...formData,
		amount: Number(formData.amount.replaceAll(' ', '')),
		dateOfIssue: new Date(formData.dateOfIssue).toISOString()
	};
}
