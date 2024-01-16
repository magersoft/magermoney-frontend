import { useCurrencyFormat } from '@/modules/currencies';
import { useIncomeSources } from '@/modules/incomeSources';
import { NIncomeSources } from '@/modules/incomeSources/domain';

export function useIncomeSourcesList() {
	const {
		incomeSources,
		hasIncomeSources,
		fetchIncomeSources,
		removeIncomeSource
	} = useIncomeSources();
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
