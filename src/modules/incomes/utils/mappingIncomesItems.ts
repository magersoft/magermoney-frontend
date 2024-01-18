import { translateCategories } from '@/modules/currencies/utils';
import { NIncomes } from '@/modules/incomes/domain';

export function mappingIncomesItems(
	incomes: NIncomes.IIncome[]
): NIncomes.IIncome[] {
	return incomes.map((income) => ({
		...income,
		category: {
			...income.category,
			name: translateCategories(income.category)
		}
	}));
}
