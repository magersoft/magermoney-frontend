import { useResponseError } from '@/shared/features';
import { useNotifyAdapter } from '@/shared/infrastructure/adapters';
import {
	SettleResponseDetails,
	SettleResponseError,
	SettleResponseOptions
} from '@/shared/types/services';
import { checkActionSuccess } from '@/shared/utils';

export function useSettleResponse<T, E extends SettleResponseError>() {
	const notify = useNotifyAdapter();
	const { showErrorNotify } = useResponseError();

	const settleResponse = (
		{ statusCode, error }: SettleResponseDetails<T>,
		{
			messages,
			isNotifySuccess = true,
			onError,
			onSuccess
		}: SettleResponseOptions<E>
	) => {
		if (checkActionSuccess(unref(statusCode)) || !unref(error)) {
			isNotifySuccess &&
				notify.success(messages.success, { closeOnClick: true });
			onSuccess && onSuccess();
			return true;
		}

		showErrorNotify(unref(error));

		onError && onError(unref(error));

		return false;
	};

	return {
		settleResponse
	};
}
