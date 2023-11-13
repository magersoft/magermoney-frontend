import { UseFetchReturn } from '@vueuse/core';

export interface RequestReturnValue<T> extends UseFetchReturn<T> {}

export interface RequestReturnError {
	message: string | string[];
	error: Error;
	statusCode: number;
}
