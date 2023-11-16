import { MaybeRef } from 'vue';

import {
	BaseFetchMethod,
	BaseFetchParams
} from '@/shared/types/services/BaseFetch.ts';

export interface BaseFetchListParams<T, P extends any[], E = unknown>
	extends BaseFetchParams<T[], P, E> {
	dataList: MaybeRef<T[]>;
}

export interface BaseFetchListResult<T, P extends any[]> {
	fetchBaseList: BaseFetchMethod<T[], P>;
}
