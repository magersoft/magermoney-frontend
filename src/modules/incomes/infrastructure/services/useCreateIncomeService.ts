import { useIncomesModel } from '@/modules/incomes/infrastructure/models';
import { useIncomesStore } from '@/modules/incomes/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useCreateIncomeService() {
	const { setIncome, setIsLoading, setError } = useIncomesStore();
	const { create } = useIncomesModel();

	const { fetchBase: createIncome } = useBaseFetch({
		fetchData: create,
		setData: setIncome,
		setIsLoading,
		setError
	});

	return {
		createIncome
	};
}
