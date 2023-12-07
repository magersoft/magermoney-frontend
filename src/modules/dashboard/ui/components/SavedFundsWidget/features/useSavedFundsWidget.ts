import { useCurrencyFormat } from '@/modules/currencies';
import { useSavedFunds } from '@/modules/savedFunds';

export function useSavedFundsWidget() {
	const { savedFunds } = useSavedFunds();
	const { formatAmountWithCurrencyNoFraction } = useCurrencyFormat();

	const onlyThreeFunds = computed(() =>
		savedFunds.value.slice(0, 3).map((fund) => ({
			...fund,
			amount: formatAmountWithCurrencyNoFraction(
				fund.amount,
				fund.currency.code
			)
		}))
	);

	return {
		savedFunds,
		onlyThreeFunds
	};
}
