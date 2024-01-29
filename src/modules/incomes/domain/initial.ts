import { useStorage } from '@vueuse/core';

import { appConfig } from '@/app/config';

export type TInitialIncomeFormData = {
	title: string;
	amount: string;
	customCategoryName?: string;
	currency: string;
	dateOfIssue: string;
	incomeSourceId?: number;
	savedFundId?: number;
	categoryId?: number;
};

const appSettings = useStorage('settings', {
	currency: appConfig.defaultCurrency
});

export const initialIncomeFormData: TInitialIncomeFormData = {
	title: '',
	amount: '',
	customCategoryName: undefined,
	currency: unref(appSettings).currency,
	incomeSourceId: undefined,
	savedFundId: undefined,
	categoryId: undefined,
	dateOfIssue: new Date().toISOString()
};
