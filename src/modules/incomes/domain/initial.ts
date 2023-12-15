import { useStorage } from '@vueuse/core';

import { appConfig } from '@/app/config';

export type TInitialIncomeFormData = {
	title: string;
	amount: string;
	currency: string;
	dateOfIssue: string;
	incomeSourceId?: number;
	savedFundId?: number;
};

const appSettings = useStorage('settings', {
	currency: appConfig.defaultCurrency
});

export const initialIncomeFormData: TInitialIncomeFormData = {
	title: '',
	amount: '',
	currency: unref(appSettings).currency,
	incomeSourceId: undefined,
	savedFundId: undefined,
	dateOfIssue: new Date().toISOString()
};
