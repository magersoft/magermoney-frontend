import { AppPopups, usePopups } from '@/app/popups';
import { useCurrencyFormat } from '@/modules/currencies';
import { useSavedFunds } from '@/modules/savedFunds';

export function useSavedFundsWidget() {
	const { savedFunds, isLoading, resetSavedFund } = useSavedFunds();
	const { formatAmountWithCurrencyNoFraction } = useCurrencyFormat();
	const { setPopup } = usePopups();

	const onlyThreeFunds = computed(() =>
		savedFunds.value.slice(0, 3).map((fund) => ({
			...fund,
			amount: formatAmountWithCurrencyNoFraction(
				fund.amount,
				fund.currency.code
			)
		}))
	);

	const handleAddSavedFund = () => {
		resetSavedFund();
		setPopup(AppPopups.SaveWallet);
	};

	return {
		isLoading,
		savedFunds,
		onlyThreeFunds,
		handleAddSavedFund
	};
}
