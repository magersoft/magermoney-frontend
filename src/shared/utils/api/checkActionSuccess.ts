import { ResponseStatuses } from '@/shared/types/api';

export const checkActionSuccess = (status?: number | null): boolean =>
	status === ResponseStatuses.Success ||
	status === ResponseStatuses.Created ||
	status === ResponseStatuses.NoContent;
