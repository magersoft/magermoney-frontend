import { useExpensesModel } from '@/modules/expenses/infrastructure/models';
import { useBaseRemove } from '@/shared/infrastructure/services';

export function useRemoveExpenseService() {
	const { remove } = useExpensesModel();

	const { confirmRemove: removeExpense } = useBaseRemove({
		handleRemove: remove,
		title: 'expenses.removeTitle',
		entityTitle: (entityName) => `«${entityName}»`
	});

	return {
		removeExpense
	};
}
