import { useAccumulationFundStore } from '@/modules/accumulationFunds/infrastructure/stores';
import { useCalculations } from '@/modules/calculations';
import { useCurrencyFormat } from '@/modules/currencies';

export function useAccumulationFundsBalance() {
	const {
		balanceAccumulationAmount,
		balanceMinusAccumulationPercent,
		balanceAccumulationCurrency
	} = useCalculations();
	const { hasAccumulationFunds } = useAccumulationFundStore();
	const { formatAmountWithCurrency } = useCurrencyFormat();

	const hasBalance = computed(() => unref(hasAccumulationFunds));

	const balanceAccumulationAmountWithCurrency = computed(() =>
		formatAmountWithCurrency(
			unref(balanceAccumulationAmount),
			unref(balanceAccumulationCurrency)
		)
	);
	const balanceMinusAccumulationPercentWithCurrency = computed(() =>
		formatAmountWithCurrency(
			unref(balanceMinusAccumulationPercent),
			unref(balanceAccumulationCurrency)
		)
	);

	return {
		hasBalance,
		balanceAccumulationAmountWithCurrency,
		balanceMinusAccumulationPercentWithCurrency
	};
}
