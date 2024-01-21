import { RequestReturnValue } from '@/shared/types/api';
import { SystemMessages } from '@/shared/types/utils';

export interface BaseRemoveParams<T extends any[], EntityName> {
	handleRemove: (...args: T) => RequestReturnValue<unknown>;
	onSuccess?: () => unknown;
	onError?: () => unknown;
	isNotifyError?: boolean;
	isNotifySuccess?: boolean;
	title?: string;
	removedMessages?: SystemMessages;
	entityTitle?: (entityName: EntityName) => string;
	confirmRemoveContent?: (entityName: string) => string;
}
