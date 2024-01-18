import { useCurrencyFormat } from '@/modules/currencies';
import { translateCategories } from '@/modules/currencies/utils';
import { NIncomeSources } from '@/modules/incomeSources/domain';

export function mappingIncomeSourcesForPicker(
	incomeSources: NIncomeSources.IIncomeSource[]
) {
	const { formatAmountWithCurrencyNoFraction } = useCurrencyFormat();

	return incomeSources.map((incomeSource) => ({
		...incomeSource,
		category: {
			...incomeSource.category,
			name: translateCategories(incomeSource.category)
		},
		text: `${formatAmountWithCurrencyNoFraction(
			incomeSource.amount,
			incomeSource.currency.code
		)} - ${translateCategories(incomeSource.category)}`,
		value: incomeSource.amount
	}));
}
