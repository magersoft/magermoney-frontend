import { useI18n } from 'vue-i18n';

import { useCalculations } from '@/modules/calculations';
import { useCurrencyFormat } from '@/modules/currencies';
import { useSettingsStore } from '@/modules/settings/infrastructure/stores';
import { roundWithDecimals } from '@/shared/utils';

export function useMonthlyBudget() {
	const { currency } = useSettingsStore();
	const { monthlyBudget, isLoading, fetchMonthlyBudget } = useCalculations();
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

	const restAmountPercentageFormatted = computed(() =>
		roundWithDecimals(unref(restAmountPercentage), 0)
	);

	const accumulationFundAmountFormatted = computed(() => {
		if (!unref(monthlyBudget)) {
			return 0;
		}

		return formatAmountWithCurrencyNoFraction(
			unref(monthlyBudget)!.accumulationFundAmount,
			unref(monthlyBudget)!.currency
		);
	});

	const availableAmountInDayFormatted = computed(() => {
		if (!unref(monthlyBudget)) {
			return 0;
		}

		return formatAmountWithCurrencyNoFraction(
			unref(monthlyBudget)!.availableAmountInDay,
			unref(monthlyBudget)!.currency
		);
	});

	const isRefreshLoading = ref(false);

	const handleRefresh = async () => {
		isRefreshLoading.value = true;

		await fetchMonthlyBudget({ force: true }, unref(currency));

		isRefreshLoading.value = false;
	};

	return {
		monthlyBudgetFormatted,
		restAmountFormatted,
		spentAmountFormatted,
		restAmountPercentage,
		restAmountPercentageFormatted,
		accumulationFundAmountFormatted,
		availableAmountInDayFormatted,
		isLoading,
		isRefreshLoading,
		handleRefresh
	};
}
