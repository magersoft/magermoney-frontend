import { appConfig } from '@/app/config';
import { useBaseFetchList } from '@/shared/infrastructure/services/useBaseFetchList.ts';
import { RequestReturnError } from '@/shared/types/api';
import {
	BaseFetchPaginatedParams,
	BaseFetchPaginatedResult
} from '@/shared/types/services';

export function useBaseFetchPaginated<
	T,
	P extends any[],
	E = RequestReturnError
>({
	fetchData,
	setData,
	setIsLoading,
	setError,
	onError,
	dataList,
	page,
	setPage,
	pageSize = appConfig.defaultPaginationPageSize,
	firstPage = 1
}: BaseFetchPaginatedParams<T, P, E>): BaseFetchPaginatedResult<T, P> {
	const { fetchBaseList } = useBaseFetchList<T, P, E>({
		fetchData: (...args: P) => {
			unref(setPage)(firstPage);
			unref(setData)([]);

			return fetchData(...args).json();
		},
		setIsLoading,
		setData,
		setError,
		dataList,
		onError
	});

	const fetchBasePaginated = async (...args: P) => {
		if (unref(dataList).length === 0 || unref(dataList).length % pageSize !== 0)
			return;

		unref(setPage)(unref(page) + 1);
		unref(setIsLoading)(unref(dataList).length >= pageSize);

		const response = await fetchData(...args).json();

		unref(setIsLoading)(false);

		if (unref(response.data) && Array.isArray(unref(response.data))) {
			const appendedDataList = [
				...unref(dataList),
				...(unref(response.data) as T[])
			];

			unref(setData)(appendedDataList);
		}

		return response;
	};

	return {
		fetchBaseList,
		fetchBasePaginated
	};
}
