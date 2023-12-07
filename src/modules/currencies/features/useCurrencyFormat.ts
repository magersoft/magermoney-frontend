import { useI18n } from 'vue-i18n';

export function useCurrencyFormat() {
	const { locale } = useI18n();

	const formatAmountWithCurrency = (
		value: number,
		currency: string
	): string => {
		return new Intl.NumberFormat(unref(locale), {
			style: 'currency',
			currency
		}).format(value);
	};

	const formatAmountWithCurrencyNoFraction = (
		value: number,
		currency: string
	): string => {
		return new Intl.NumberFormat(unref(locale), {
			style: 'currency',
			currency,
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}).format(value);
	};

	const getCurrencySymbol = (currency: string): string => {
		return (0)
			.toLocaleString(unref(locale), {
				style: 'currency',
				currency,
				minimumFractionDigits: 0,
				maximumFractionDigits: 0
			})
			.replace(/\d/g, '')
			.trim();
	};

	return {
		formatAmountWithCurrency,
		formatAmountWithCurrencyNoFraction,
		getCurrencySymbol
	};
}
