import { useAccumulatedFundsModel } from '@/modules/accumulatedFunds/infrastructure/models';
import { useBaseRemove } from '@/shared/infrastructure/services';

export function useRemoveAccumulatedFundService() {
	const { remove } = useAccumulatedFundsModel();

	const { confirmRemove: removeAccumulatedFund } = useBaseRemove({
		handleRemove: remove,
		title: 'welcome.accumulatedFunds.removeTitle',
		entityTitle: (entityName) => `«${entityName}»`
	});

	return {
		removeAccumulatedFund
	};
}
