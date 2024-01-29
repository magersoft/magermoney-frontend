import { useStorage } from '@vueuse/core/index';

import { appConfig } from '@/app/config';

export type TInitialExpenseFormData = {
	title: string;
	amount: string;
	customCategoryName?: string;
	currency: string;
	dateOfIssue: string;
	expenseSourceId?: number;
	savedFundId?: number;
	categoryId?: number;
};

const appSettings = useStorage('settings', {
	currency: appConfig.defaultCurrency
});

export const initialExpenseFormData: TInitialExpenseFormData = {
	title: '',
	amount: '',
	customCategoryName: undefined,
	currency: unref(appSettings).currency,
	expenseSourceId: undefined,
	savedFundId: undefined,
	categoryId: undefined,
	dateOfIssue: new Date().toISOString()
};
