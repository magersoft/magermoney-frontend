import { RequestReturnError, RequestReturnValue } from '@/shared/types/api';
import { SystemMessages } from '@/shared/types/utils';

export type SettleResponseError = RequestReturnError | string;

export interface SettleResponseDetails<T> extends RequestReturnValue<T> {}

export interface SettleResponseOptions<E extends SettleResponseError> {
	messages: SystemMessages;
	onSuccess?: () => void;
	onError?: (error: E) => void;
	isNotifySuccess?: boolean;
	isNotifyError?: boolean;
}
