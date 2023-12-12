import { useIncomeSources } from '@/modules/incomeSources/features';

export function useInitAddIncomeForm() {
	const { fetchIncomeSources } = useIncomeSources();

	const fetchData = async () => {
		await Promise.all([fetchIncomeSources()]);
	};

	fetchData();
}
