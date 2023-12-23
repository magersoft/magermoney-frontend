import { NHistory } from '@/modules/history/domain';
import { useApiFetch } from '@/shared/infrastructure/api';

export const useHistoryModel = (): NHistory.IModel => {
	const { fetch, getUrlWithQueryParams } = useApiFetch();

	const findAll = (query?: NHistory.IQueryHistory) =>
		fetch<NHistory.IHistory[]>(
			getUrlWithQueryParams(`/${NHistory.API_NAMESPACE}`, query)
		).get();

	return {
		findAll
	};
};
