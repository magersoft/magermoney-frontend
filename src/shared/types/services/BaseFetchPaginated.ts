import type { Ref } from 'vue';

import { RequestReturnValue } from '@/shared/types/api';
import {
	BaseFetchListParams,
	BaseFetchListResult
} from '@/shared/types/services/BaseFetchList.ts';

export interface BaseFetchPaginatedParams<T, P extends any[], E = unknown>
	extends BaseFetchListParams<T, P, E> {
	page: Ref<number>;
	pageSize?: number;
	firstPage?: number;
	setPage: (page: number) => void;
}

export interface BaseFetchPaginatedResult<T, P extends any[]>
	extends BaseFetchListResult<T, P> {
	fetchBasePaginated: (...args: P) => Promise<RequestReturnValue<T[]> | void>;
}
