import { useI18n } from 'vue-i18n';

import { useCalculations } from '@/modules/calculations';
import { useCurrencyFormat } from '@/modules/currencies';

export function useMonthlyIncomesWidget() {
	const { totalMonthlyIncomes, isLoading } = useCalculations();
	const { formatAmountWithCurrencyNoFraction } = useCurrencyFormat();

	const { t } = useI18n();

	const totalMonthlyIncomesFormatted = computed(() => {
		if (!unref(totalMonthlyIncomes)) {
			return t('noData');
		}

		return formatAmountWithCurrencyNoFraction(
			unref(totalMonthlyIncomes)!.amount,
			unref(totalMonthlyIncomes)!.currency
		);
	});

	return {
		totalMonthlyIncomesFormatted,
		isLoading
	};
}
