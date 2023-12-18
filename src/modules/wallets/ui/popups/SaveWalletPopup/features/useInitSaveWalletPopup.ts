import { useCurrencies } from '@/modules/currencies';

export function useInitSaveWalletPopup() {
	const { fetchCurrencies } = useCurrencies();

	const fetchData = async () => {
		await Promise.all([fetchCurrencies()]);
	};

	fetchData();
}
