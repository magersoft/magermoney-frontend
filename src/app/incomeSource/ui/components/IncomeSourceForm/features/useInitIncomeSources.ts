import { useFetchIncomeSourcesService } from '@/app/incomeSource/infrastructure/services';

export function useInitIncomeSources() {
	const { fetchIncomeSources } = useFetchIncomeSourcesService();

	fetchIncomeSources();
}
