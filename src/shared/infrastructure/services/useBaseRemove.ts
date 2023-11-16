import { useI18n } from 'vue-i18n';

import { baseRemoveMessages, baseRemoveTitle } from '@/shared/constants';
import {
	DialogActionType,
	useDialogAdapter
} from '@/shared/infrastructure/adapters';
import { useSettleResponse } from '@/shared/infrastructure/services/useSettleResponse.ts';
import { BaseRemoveParams } from '@/shared/types/services';

export function useBaseRemove<T extends any[], EntityName = string>({
	handleRemove,
	onSuccess,
	onError,
	title = baseRemoveTitle,
	removedMessages = baseRemoveMessages,
	entityTitle = (entityName: EntityName) => `«${entityName}»`,
	confirmRemoveContent
}: BaseRemoveParams<T, EntityName>) {
	const dialog = useDialogAdapter();
	const { t } = useI18n();
	const { settleResponse } = useSettleResponse();

	const remove = async (...args: T) => {
		const response = await handleRemove(...args).json();

		return settleResponse(response, {
			messages: {
				success: t(removedMessages.success),
				fail: t(removedMessages.fail)
			},
			onSuccess,
			onError
		});
	};

	const confirmRemove = async (entityName: EntityName, ...args: T) => {
		const action = await dialog.confirm(
			t(title),
			confirmRemoveContent?.(entityTitle(entityName)) ??
				t('confirmRemoveContent', { entityName: entityTitle(entityName) }),
			{
				confirmButtonText: t('delete'),
				cancelButtonText: t('cancel'),
				confirmButtonColor: 'var(--van-danger-color)'
			}
		);

		if (action === DialogActionType.CANCEL) return false;

		if (action === DialogActionType.CONFIRM) {
			await remove(...args);
			return true;
		}
	};

	return {
		remove,
		confirmRemove
	};
}
