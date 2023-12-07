import { useResponseError } from '@/shared/features';
import { RequestReturnError } from '@/shared/types/api';
import {
	BaseFetchMethod,
	BaseFetchMethodParams,
	BaseFetchParams,
	BaseFetchResult
} from '@/shared/types/services';

export function useBaseFetch<T, P extends any[], E = RequestReturnError>({
	fetchData,
	setIsLoading,
	setData,
	setError,
	skipFetch,
	onError
}: BaseFetchParams<T, P, E>): BaseFetchResult<T, P> {
	const { showErrorNotify } = useResponseError();

	const fetchBase: BaseFetchMethod<T, P> = async (
		{ force, quite, showError }: BaseFetchMethodParams = {},
		...args: P
	) => {
		if (!force && skipFetch && skipFetch()) return;

		!quite && unref(setIsLoading)(true);

		unref(setError)(null);

		const response = await fetchData(...args).json();

		if (unref(response.error) && onError) {
			onError(unref(response.error));
		}

		if (showError && unref(response.error)) {
			showErrorNotify(unref(response.error));
		}

		unref(setIsLoading)(false);

		unref(response.data) && unref(setData)(unref(response.data));
		unref(response.error) && unref(setError)(unref(response.error));

		return response;
	};

	return {
		fetchBase
	};
}
