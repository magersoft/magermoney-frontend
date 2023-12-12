import { useI18n } from 'vue-i18n';

import { SystemMessages } from '@/shared/types/utils';

export function useTranslateSystemMessages() {
	const { t } = useI18n();

	const translateSystemMessages = (messages: SystemMessages) => {
		return {
			success: t(messages.success),
			fail: t(messages.fail)
		};
	};

	return {
		translateSystemMessages
	};
}
