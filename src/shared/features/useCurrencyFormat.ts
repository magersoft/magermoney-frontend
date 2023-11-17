import { useI18n } from 'vue-i18n';

export function useCurrencyFormat() {
	const { locale } = useI18n();

	const formatMoneyWithCurrency = (value: number, currency: string): string => {
		return new Intl.NumberFormat(unref(locale), {
			style: 'currency',
			currency
		}).format(value);
	};

	return {
		formatMoneyWithCurrency
	};
}
