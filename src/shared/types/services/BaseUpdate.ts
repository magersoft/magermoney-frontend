import { RequestReturnValue } from '@/shared/types/api';
import {
	BaseFetchMethodParams,
	BaseFetchParams
} from '@/shared/types/services/BaseFetch.ts';

export type BaseUpdatingData<D> = D & { id: number };

export interface BaseUpdateParams<T, D, P extends any[], E = unknown>
	extends Omit<BaseFetchParams<T, P, E>, 'fetchData'> {
	updateData: (id: number, ...args: P) => RequestReturnValue<T>;
	data: BaseUpdatingData<D>;
}

export type BaseUpdateMethodParams = BaseFetchMethodParams;

export type BaseUpdateMethod<T, P extends any[]> = (
	params?: BaseUpdateMethodParams,
	...args: P
) => Promise<RequestReturnValue<T> | void>;

export interface BaseUpdateResult<T, P extends any[]> {
	updateBase: BaseUpdateMethod<T, P>;
}
