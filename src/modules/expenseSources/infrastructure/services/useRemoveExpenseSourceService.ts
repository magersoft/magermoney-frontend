import { useExpenseSourcesModel } from '@/modules/expenseSources/infrastructure/models';
import { useBaseRemove } from '@/shared/infrastructure/services';

export function useRemoveExpenseSourceService() {
	const { remove } = useExpenseSourcesModel();

	const { confirmRemove: removeExpenseSource } = useBaseRemove({
		handleRemove: remove,
		title: 'expenseSources.removeTitle',
		entityTitle: (entityName) => `«${entityName}»`
	});

	return {
		removeExpenseSource
	};
}
