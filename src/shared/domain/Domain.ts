import { RequestReturnError } from '@/shared/types/api';

export interface IFetchState<E = RequestReturnError> {
	isLoading: boolean;
	error: E | null;
}
