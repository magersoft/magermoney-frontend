import { RequestReturnValue } from '@/shared/types/api';

export interface BaseFetch<T, P extends any[], E = unknown> {
	fetchData: (...args: (P[number] | undefined)[]) => RequestReturnValue<T>;
	setIsLoading: (value: boolean) => void;
	setData: (data: T | null) => void;
	setError: (error: E | null) => void;
	skipFetch?: () => boolean;
	onError?: (error: E) => void;
}

export type BaseFetchMethodParams = {
	force?: boolean;
	quite?: boolean;
	showError?: boolean;
};

export type BaseFetchMethod<T, P extends any[]> = (
	params?: BaseFetchMethodParams,
	...args: (P[number] | undefined)[]
) => Promise<RequestReturnValue<T> | void>;

export interface BaseFetchResult<T, P extends any[]> {
	fetchBase: BaseFetchMethod<T, P>;
}
