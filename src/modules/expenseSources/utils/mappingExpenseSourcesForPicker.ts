import { useCurrencyFormat } from '@/modules/currencies';
import { NExpenseSources } from '@/modules/expenseSources/domain';

export function mappingExpenseSourcesForPicker(
	expenseSources: NExpenseSources.IExpenseSource[]
) {
	const { formatAmountWithCurrencyNoFraction } = useCurrencyFormat();

	return expenseSources.map((expenseSource) => ({
		...expenseSource,
		text: `${formatAmountWithCurrencyNoFraction(
			expenseSource.amount,
			expenseSource.currency.code
		)} - ${expenseSource.title}`,
		value: expenseSource.amount
	}));
}
