import { NIncomeSources } from '@/modules/incomeSources/domain';
import {
	useFetchIncomeSourcesService,
	useRemoveIncomeSourceService
} from '@/modules/incomeSources/infrastructure/services';
import { useCurrencyFormat } from '@/shared/features';

export function useIncomeSourcesList() {
	const { incomeSources, hasIncomeSources, fetchIncomeSources } =
		useFetchIncomeSourcesService();
	const { removeIncomeSource } = useRemoveIncomeSourceService();
	const { formatMoneyWithCurrency } = useCurrencyFormat();

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
		formatMoneyWithCurrency,
		handleRemove
	};
}