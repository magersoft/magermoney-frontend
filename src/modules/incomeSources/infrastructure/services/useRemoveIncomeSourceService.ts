import { useIncomeSourcesModel } from '@/modules/incomeSources/infrastructure/models';
import { useBaseRemove } from '@/shared/infrastructure/services';

export function useRemoveIncomeSourceService() {
	const { remove } = useIncomeSourcesModel();

	const { confirmRemove: removeIncomeSource } = useBaseRemove({
		handleRemove: remove,
		title: 'incomeSource.removeTitle',
		entityTitle: (entityName) => `«${entityName}»`
	});

	return {
		removeIncomeSource
	};
}
