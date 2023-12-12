import { useI18n } from 'vue-i18n';

import { useCalculations } from '@/modules/calculations';
import { useCurrencyFormat } from '@/modules/currencies';

export function useMonthlyExpensesWidget() {
	const { totalMonthlyExpenses, isLoading } = useCalculations();
	const { formatAmountWithCurrencyNoFraction } = useCurrencyFormat();

	const { t } = useI18n();

	const totalMonthlyExpensesFormatted = computed(() => {
		if (!unref(totalMonthlyExpenses)) {
			return t('noData');
		}

		return formatAmountWithCurrencyNoFraction(
			unref(totalMonthlyExpenses)!.amount,
			unref(totalMonthlyExpenses)!.currency
		);
	});

	return {
		totalMonthlyExpensesFormatted,
		isLoading
	};
}
