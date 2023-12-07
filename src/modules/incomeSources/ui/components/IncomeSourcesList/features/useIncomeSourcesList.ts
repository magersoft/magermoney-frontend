import { useCurrencyFormat } from '@/modules/currencies';
import { NIncomeSources } from '@/modules/incomeSources/domain';
import {
	useFetchIncomeSourcesService,
	useRemoveIncomeSourceService
} from '@/modules/incomeSources/infrastructure/services';
import { useIncomeSourcesStore } from '@/modules/incomeSources/infrastructure/stores';

export function useIncomeSourcesList() {
	const { incomeSources, hasIncomeSources } = useIncomeSourcesStore();
	const { fetchIncomeSources } = useFetchIncomeSourcesService();
	const { removeIncomeSource } = useRemoveIncomeSourceService();
	const { formatAmountWithCurrency } = useCurrencyFormat();

	const handleRemove = async (incomeSource: NIncomeSources.IIncomeSource) => {
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
		hasIncomeSources,
		formatAmountWithCurrency,
		handleRemove
	};
}
