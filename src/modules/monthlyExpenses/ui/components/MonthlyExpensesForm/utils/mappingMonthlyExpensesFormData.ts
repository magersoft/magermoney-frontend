import {
	NMonthlyExpenses,
	TInitialMonthlyExpensesFormData
} from '@/modules/monthlyExpenses/domain';
import { trimString } from '@/shared/utils';

export function mappingMonthlyExpensesFormData(
	formData: TInitialMonthlyExpensesFormData
): NMonthlyExpenses.ICreateMonthlyExpense {
	return {
		...formData,
		amount: Number(trimString(formData.amount))
	};
}
