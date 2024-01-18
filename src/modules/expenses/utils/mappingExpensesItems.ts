import { translateCategories } from '@/modules/currencies/utils';
import { NExpenses } from '@/modules/expenses/domain';

export function mappingExpensesItems(
	expenses: NExpenses.IExpense[]
): NExpenses.IExpense[] {
	return expenses.map((expense) => ({
		...expense,
		category: {
			...expense.category,
			name: translateCategories(expense.category)
		}
	}));
}
