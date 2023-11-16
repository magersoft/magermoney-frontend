import { useIncomeSourceModel } from '@/modules/incomeSource/infrastructure/model';
import { useBaseRemove } from '@/shared/infrastructure/services';

export function useRemoveIncomeSourceService() {
	const { remove } = useIncomeSourceModel();

	const { confirmRemove: removeIncomeSource } = useBaseRemove({
		handleRemove: remove,
		title: 'welcome.incomeSource.removeTitle',
		entityTitle: (entityName) => `«${entityName}»`
	});

	return {
		removeIncomeSource
	};
}
