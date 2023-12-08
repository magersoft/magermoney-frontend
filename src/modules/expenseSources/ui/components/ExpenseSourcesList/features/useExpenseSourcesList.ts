import { useCurrencyFormat } from '@/modules/currencies';
import { NExpenseSources } from '@/modules/expenseSources/domain';
import {
	useFetchExpenseSourcesService,
	useRemoveExpenseSourceService
} from '@/modules/expenseSources/infrastructure/services';
import { useExpenseSourcesStore } from '@/modules/expenseSources/infrastructure/stores';

export function useExpenseSourcesList() {
	const { expenseSources, hasExpenseSources } = useExpenseSourcesStore();
	const { fetchExpenseSources } = useFetchExpenseSourcesService();
	const { removeExpenseSource } = useRemoveExpenseSourceService();
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
