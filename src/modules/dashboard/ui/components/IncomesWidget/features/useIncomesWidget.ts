import { useI18n } from 'vue-i18n';

import { useCalculations } from '@/modules/calculations';
import { useCurrencyFormat } from '@/modules/currencies';

export function useIncomesWidget() {
	const { totalIncomes, isLoading } = useCalculations();
	const { formatAmountWithCurrencyNoFraction } = useCurrencyFormat();

	const { t } = useI18n();

	const totalIncomesFormatted = computed(() => {
		if (!unref(totalIncomes)) {
			return t('noData');
		}

		return formatAmountWithCurrencyNoFraction(
			unref(totalIncomes)!.amount,
			unref(totalIncomes)!.currency
		);
	});

	return {
		totalIncomesFormatted,
		isLoading
	};
}
