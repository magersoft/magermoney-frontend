import { useI18n } from 'vue-i18n';

import { useCalculations } from '@/modules/calculations';
import { useCurrencyFormat } from '@/modules/currencies';

export function useTotalBalanceWidget() {
	const { totalBalance, isLoading } = useCalculations();
	const { formatAmountWithCurrency } = useCurrencyFormat();

	const { t } = useI18n();

	const totalBalanceFormatted = computed(() => {
		if (!unref(totalBalance)) {
			return t('noData');
		}

		return formatAmountWithCurrency(
			unref(totalBalance)!.amount,
			unref(totalBalance)!.currency
		);
	});

	return {
		totalBalanceFormatted,
		isLoading
	};
}
