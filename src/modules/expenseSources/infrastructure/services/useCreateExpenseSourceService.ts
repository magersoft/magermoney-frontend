import { useExpenseSourcesModel } from '@/modules/expenseSources/infrastructure/models';
import { useExpenseSourcesStore } from '@/modules/expenseSources/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useCreateExpenseSourceService() {
	const { setExpenseSource, setIsLoading, setError } = useExpenseSourcesStore();
	const { create } = useExpenseSourcesModel();

	const { fetchBase: createExpenseSource } = useBaseFetch({
		fetchData: create,
		setData: setExpenseSource,
		setIsLoading,
		setError
	});

	return {
		createExpenseSource
	};
}
