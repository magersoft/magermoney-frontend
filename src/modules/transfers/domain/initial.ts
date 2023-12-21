import { useStorage } from '@vueuse/core';

import { appConfig } from '@/app/config';

export type TInitialTransferFormData = {
	amount: string;
	currency: string;
	toId?: number;
	fromId?: number;
};

const appSettings = useStorage('settings', {
	currency: appConfig.defaultCurrency
});

export const initialTransferFormData: TInitialTransferFormData = {
	amount: '',
	currency: unref(appSettings).currency,
	toId: undefined,
	fromId: undefined
};
