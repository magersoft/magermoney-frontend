import { useNotifyAdapter } from '@/shared/infrastructure/adapters';
import { RequestReturnError } from '@/shared/types/api';

export function useResponseError() {
	const notify = useNotifyAdapter();

	const showErrorNotify = (error: RequestReturnError) => {
		const messages = Array.isArray(error.message)
			? error.message.join(', ')
			: error.message;
		notify.fail(messages, {
			position: 'top',
			wordBreak: 'break-word',
			closeOnClick: true,
			duration: 4000
		});
	};

	return {
		showErrorNotify
	};
}
