import { useMonthlyExpensesModel } from '@/modules/monthlyExpenses/infrastructure/models';
import { useBaseRemove } from '@/shared/infrastructure/services';

export function useRemoveMonthlyExpenseService() {
	const { remove } = useMonthlyExpensesModel();

	const { confirmRemove: removeMonthlyExpense } = useBaseRemove({
		handleRemove: remove,
		title: 'monthlyExpense.removeTitle',
		entityTitle: (entityName) => `«${entityName}»`
	});

	return {
		removeMonthlyExpense
	};
}
