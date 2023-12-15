import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import { AppRoutes } from '@/app/router/constants';
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

	const router = useRouter();
	const handleNavigateToWallets = () => {
		router.push({ name: AppRoutes.Wallets });
	};

	return {
		totalBalanceFormatted,
		isLoading,
		handleNavigateToWallets
	};
}
