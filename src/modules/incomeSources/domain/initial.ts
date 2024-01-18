import { appConfig } from '@/app/config';

export type TInitialIncomeSourceFormData = {
	title: string;
	amount: string;
	currency: string;
	categoryId?: number;
};

export const initialIncomeSourceFormControls: TInitialIncomeSourceFormData = {
	title: '',
	amount: '',
	currency: appConfig.defaultCurrency,
	categoryId: undefined
};
