import { serverMessagesError } from '@/shared/constants';
import { ResponseStatuses } from '@/shared/types/api';

export function useCatchErrors() {
	const catchInternalServerError = (
		status: ResponseStatuses | undefined,
		message: string,
		callback: () => void
	) => {
		if (
			status === ResponseStatuses.InternalServerError ||
			message === serverMessagesError.FailedToFetch
		) {
			callback();
		}
	};

	const catchNotFoundError = (
		status: ResponseStatuses | undefined,
		message: string,
		callback: () => void
	) => {
		if (
			status === ResponseStatuses.NotFound &&
			message === serverMessagesError.UserNotFound
		) {
			callback();
		}
	};

	const catchUnauthorizedError = (
		status: ResponseStatuses | undefined,
		message: string,
		callback: () => void
	) => {
		if (
			status === ResponseStatuses.Unauthorized ||
			message === serverMessagesError.Unauthorized
		) {
			callback();
		}
	};

	return {
		catchInternalServerError,
		catchNotFoundError,
		catchUnauthorizedError
	};
}
