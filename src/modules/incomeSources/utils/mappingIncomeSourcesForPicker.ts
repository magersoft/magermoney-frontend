import { useCurrencyFormat } from '@/modules/currencies';
import { NIncomeSources } from '@/modules/incomeSources/domain';

export function mappingIncomeSourcesForPicker(
	incomeSources: NIncomeSources.IIncomeSource[]
) {
	const { formatAmountWithCurrencyNoFraction } = useCurrencyFormat();

	return incomeSources.map((incomeSource) => ({
		...incomeSource,
		text: `${formatAmountWithCurrencyNoFraction(
			incomeSource.amount,
			incomeSource.currency.code
		)} - ${incomeSource.title}`,
		value: incomeSource.amount
	}));
}
