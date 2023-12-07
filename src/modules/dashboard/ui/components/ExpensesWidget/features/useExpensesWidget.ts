import { useI18n } from 'vue-i18n';

import { useCalculations } from '@/modules/calculations';
import { useCurrencyFormat } from '@/modules/currencies';

export function useExpensesWidget() {
	const { totalExpenses, isLoading } = useCalculations();
	const { formatAmountWithCurrencyNoFraction } = useCurrencyFormat();

	const { t } = useI18n();

	const totalExpensesFormatted = computed(() => {
		if (!unref(totalExpenses)) {
			return t('noData');
		}

		return formatAmountWithCurrencyNoFraction(
			unref(totalExpenses)!.amount,
			unref(totalExpenses)!.currency
		);
	});

	return {
		totalExpensesFormatted,
		isLoading
	};
}
