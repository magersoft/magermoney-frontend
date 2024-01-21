import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import { AppRoutes } from '@/app/router/constants';
import { useCalculations } from '@/modules/calculations';
import { useCurrencyFormat } from '@/modules/currencies';

export function useMonthlyIncomesWidget() {
	const { totalIncomes, isLoading } = useCalculations();
	const { formatAmountWithCurrencyNoFraction } = useCurrencyFormat();

	const { t } = useI18n();

	const totalMonthlyIncomesFormatted = computed(() => {
		if (!unref(totalIncomes)) {
			return t('noData');
		}

		return formatAmountWithCurrencyNoFraction(
			unref(totalIncomes)!.amount,
			unref(totalIncomes)!.currency
		);
	});

	const router = useRouter();

	const handleNavigateToIncomes = () => {
		router.push({ name: AppRoutes.Incomes });
	};

	return {
		totalMonthlyIncomesFormatted,
		isLoading,
		handleNavigateToIncomes
	};
}
