import { useFetchIncomeSourcesService } from '@/modules/incomeSource/infrastructure/services';

export function useInitIncomeSources() {
	const { fetchIncomeSources } = useFetchIncomeSourcesService();

	fetchIncomeSources();
}
