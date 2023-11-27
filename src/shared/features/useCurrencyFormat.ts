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

	return {
		formatAmountWithCurrency
	};
}
