import { useCurrencyFormat } from '@/modules/currencies';
import { useSettingsStore } from '@/modules/settings/infrastructure/stores';

export function useCurrenciesButton() {
	const { currency } = useSettingsStore();
	const { getCurrencySymbol } = useCurrencyFormat();

	const symbol = computed(() => getCurrencySymbol(unref(currency)));

	return {
		currency,
		symbol
	};
}
