import { useCurrencies, useCurrencyFormat } from '@/modules/currencies';

export function useExchangeRatesWidget() {
	const { currenciesRates, isLoading } = useCurrencies();
	const { formatAmountWithCurrency } = useCurrencyFormat();

	const currenciesRatesItems = computed(() =>
		unref(currenciesRates).map((item) => ({
			title: `${item.to} - ${item.from}`,
			rate: formatAmountWithCurrency(item.price, item.to, 4)
		}))
	);

	return {
		currenciesRatesItems,
		isLoading
	};
}
