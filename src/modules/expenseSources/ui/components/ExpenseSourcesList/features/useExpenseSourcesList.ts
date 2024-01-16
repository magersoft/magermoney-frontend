import { useCurrencyFormat } from '@/modules/currencies';
import { useExpenseSources } from '@/modules/expenseSources';
import { NExpenseSources } from '@/modules/expenseSources/domain';

export function useExpenseSourcesList() {
	const {
		expenseSources,
		hasExpenseSources,
		fetchExpenseSources,
		removeExpenseSource
	} = useExpenseSources();
	const { formatAmountWithCurrency } = useCurrencyFormat();

	const handleRemove = async (
		expenseSource: NExpenseSources.IExpenseSource
	) => {
		const isRemovedSuccess = await removeExpenseSource(
			expenseSource.title,
			expenseSource.id
		);

		if (isRemovedSuccess) {
			fetchExpenseSources({ force: true, quite: true });
		}
	};

	return {
		expenseSources,
		hasExpenseSources,
		formatAmountWithCurrency,
		handleRemove
	};
}
