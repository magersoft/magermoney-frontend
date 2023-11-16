import { NIncomeSource } from '@/app/incomeSource/domain';
import {
	useFetchIncomeSourcesService,
	useRemoveIncomeSourceService
} from '@/app/incomeSource/infrastructure/services';
import { useIncomeSourceStore } from '@/app/incomeSource/infrastructure/stores';

export function useIncomeSourcesList() {
	const { incomeSources } = useIncomeSourceStore();
	const { fetchIncomeSources } = useFetchIncomeSourcesService();
	const { removeIncomeSource } = useRemoveIncomeSourceService();

	const handleRemove = async (incomeSource: NIncomeSource.IIncomeSource) => {
		const isRemovedSuccess = await removeIncomeSource(
			incomeSource.title,
			incomeSource.id
		);

		if (isRemovedSuccess) {
			fetchIncomeSources({ force: true, quite: true });
		}
	};

	return {
		incomeSources,
		handleRemove
	};
}
