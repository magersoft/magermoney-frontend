import { useI18n } from 'vue-i18n';

import { NCurrency } from '@/modules/currency/domain';

export function mappingCurrenciesForPicker(currencies: NCurrency.ICurrency[]) {
	const { t } = useI18n();

	return currencies.map((currency) => ({
		...currency,
		text: t(
			`currenciesNames.${currency.code}`,
			{},
			{ default: currency.name, missingWarn: false, fallbackWarn: false }
		),
		value: currency.code
	}));
}
