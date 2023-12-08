import {
	NExpenseSources,
	TInitialExpenseSourcesFormData
} from '@/modules/expenseSources/domain';
import { trimString } from '@/shared/utils';

export function mappingExpenseSourcesFormData(
	formData: TInitialExpenseSourcesFormData
): NExpenseSources.ICreateExpenseSource {
	return {
		...formData,
		amount: Number(trimString(formData.amount))
	};
}
