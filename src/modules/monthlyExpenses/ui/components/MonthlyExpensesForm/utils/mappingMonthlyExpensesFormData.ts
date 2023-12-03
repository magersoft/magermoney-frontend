import { TInitialMonthlyExpensesFormData } from '@/modules/monthlyExpenses/domain';
import { trimString } from '@/shared/utils';

export function mappingMonthlyExpensesFormData(
	formData: TInitialMonthlyExpensesFormData
): TInitialMonthlyExpensesFormData {
	return {
		...formData,
		amount: trimString(formData.amount)
	};
}
