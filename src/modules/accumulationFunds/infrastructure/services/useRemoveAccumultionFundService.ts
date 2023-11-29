import { useAccumulationFundsModel } from '@/modules/accumulationFunds/infrastructure/models';
import { useBaseRemove } from '@/shared/infrastructure/services';

export function useRemoveAccumulationFundService() {
	const { remove } = useAccumulationFundsModel();

	const { confirmRemove: removeAccumulationFund } = useBaseRemove({
		handleRemove: remove,
		title: 'accumulationFunds.removeTitle',
		entityTitle: (entityName) => `«${entityName}»`
	});

	return {
		removeAccumulationFund
	};
}
