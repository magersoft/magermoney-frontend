import { useCurrencies } from '@/modules/currencies';
import { useIncomeSources } from '@/modules/incomeSources/features';

export function useInitAddIncomeForm() {
	const { fetchIncomeSources } = useIncomeSources();
	const { fetchCurrencies } = useCurrencies();

	const fetchData = async () => {
		await Promise.all([fetchIncomeSources(), fetchCurrencies()]);
	};

	fetchData();
}
