import { useSavedFundsModel } from '@/modules/savedFunds/infrastructure/models';
import { useBaseRemove } from '@/shared/infrastructure/services';

export function useRemoveSavedFundService() {
	const { remove } = useSavedFundsModel();

	const { confirmRemove: removeSavedFund } = useBaseRemove({
		handleRemove: remove,
		title: 'welcome.savedFunds.removeTitle',
		entityTitle: (entityName) => `«${entityName}»`
	});

	return {
		removeSavedFund
	};
}
