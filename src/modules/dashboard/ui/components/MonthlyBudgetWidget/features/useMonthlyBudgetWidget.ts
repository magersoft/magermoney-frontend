import { useI18n } from 'vue-i18n';

import { useCalculations } from '@/modules/calculations';
import { useCurrencyFormat } from '@/modules/currencies';

export function useMonthlyBudgetWidget() {
	const { monthlyBudget, isLoading } = useCalculations();
	const { formatAmountWithCurrencyNoFraction } = useCurrencyFormat();

	const { t } = useI18n();

	const monthlyBudgetFormatted = computed(() => {
		if (!unref(monthlyBudget)) {
			return t('noData');
		}

		return formatAmountWithCurrencyNoFraction(
			unref(monthlyBudget)!.budget,
			unref(monthlyBudget)!.currency
		);
	});

	const restAmountFormatted = computed(() => {
		if (!unref(monthlyBudget)) {
			return null;
		}

		return formatAmountWithCurrencyNoFraction(
			unref(monthlyBudget)!.restAmount,
			unref(monthlyBudget)!.currency
		);
	});

	const spentAmountFormatted = computed(() => {
		if (!unref(monthlyBudget)) {
			return '0';
		}

		return formatAmountWithCurrencyNoFraction(
			unref(monthlyBudget)!.spent,
			unref(monthlyBudget)!.currency
		);
	});

	const restAmountPercentage = computed(
		() => unref(monthlyBudget)?.restAmountPercentage || 0
	);

	return {
		monthlyBudgetFormatted,
		restAmountFormatted,
		spentAmountFormatted,
		restAmountPercentage,
		isLoading
	};
}
