import { useBaseFetch } from '@/shared/infrastructure/services/useBaseFetch.ts';
import { RequestReturnError } from '@/shared/types/api';
import { BaseUpdateParams, BaseUpdateResult } from '@/shared/types/services';

export function useBaseUpdate<T, D, P extends any[], E = RequestReturnError>({
	updateData,
	data,
	setIsLoading,
	setData,
	setError,
	skipFetch,
	onError
}: BaseUpdateParams<T, D, P, E>): BaseUpdateResult<T, P> {
	const { fetchBase: updateBase } = useBaseFetch<T, P, E>({
		fetchData: (...args) => updateData(unref(data).id, ...args),
		setIsLoading,
		setData,
		setError,
		skipFetch,
		onError
	});

	return {
		updateBase
	};
}
