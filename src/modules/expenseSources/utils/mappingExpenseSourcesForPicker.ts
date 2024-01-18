import { useCurrencyFormat } from '@/modules/currencies';
import { translateCategories } from '@/modules/currencies/utils';
import { NExpenseSources } from '@/modules/expenseSources/domain';

export function mappingExpenseSourcesForPicker(
	expenseSources: NExpenseSources.IExpenseSource[]
) {
	const { formatAmountWithCurrencyNoFraction } = useCurrencyFormat();

	return expenseSources.map((expenseSource) => ({
		...expenseSource,
		category: {
			...expenseSource.category,
			name: translateCategories(expenseSource.category)
		},
		text: `${formatAmountWithCurrencyNoFraction(
			expenseSource.amount,
			expenseSource.currency.code
		)} - ${translateCategories(expenseSource.category)}`,
		value: expenseSource.amount
	}));
}
