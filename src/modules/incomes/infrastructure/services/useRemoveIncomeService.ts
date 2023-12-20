import { useIncomesModel } from '@/modules/incomes/infrastructure/models';
import { useBaseRemove } from '@/shared/infrastructure/services';

export function useRemoveIncomeService() {
	const { remove } = useIncomesModel();

	const { confirmRemove: removeIncome } = useBaseRemove({
		handleRemove: remove,
		title: 'incomesView.removeTitle',
		entityTitle: (entityName) => `${entityName}`
	});

	return {
		removeIncome
	};
}
