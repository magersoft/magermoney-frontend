import { useStorage } from '@vueuse/core';

import { appConfig } from '@/app/config';

export type TInitialIncomeFormData = {
	title: string;
	amount: string;
	currency: string;
	dateOfIssue: string;
	incomeSourceId?: number;
};

const appSettings = useStorage('settings', {
	lang: appConfig.defaultLanguage,
	currency: appConfig.defaultCurrency
});

export const initialIncomeFormData: TInitialIncomeFormData = {
	title: '',
	amount: '',
	currency: unref(appSettings).currency,
	incomeSourceId: undefined,
	dateOfIssue: new Date().toLocaleDateString(unref(appSettings).lang)
};
