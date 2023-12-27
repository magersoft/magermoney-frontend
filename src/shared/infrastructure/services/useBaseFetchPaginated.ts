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
	setIsFinished,
	setError,
	onError,
	dataList,
	page,
	setPage,
	pageSize = appConfig.defaultPaginationPageSize,
	firstPage = appConfig.defaultPaginationFirstPage
}: BaseFetchPaginatedParams<T, P, E>): BaseFetchPaginatedResult<T, P> {
	const { fetchBaseList } = useBaseFetchList<T, P, E>({
		fetchData: (...args: P) => {
			unref(setIsFinished)(false);
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
		if (
			unref(dataList).length === 0 ||
			unref(dataList).length % unref(pageSize) !== 0
		) {
			unref(setIsFinished)(true);
			return;
		}

		unref(setPage)(unref(page) + 1);
		unref(setIsLoading)(unref(dataList).length >= unref(pageSize));

		const response = await fetchData(...args).json();

		unref(setIsLoading)(false);
		unref(setIsFinished)(
			!unref(response.data) || unref(response.data)!.length === 0
		);

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
