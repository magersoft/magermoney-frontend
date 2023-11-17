import { appConfig } from '@/app/config';

export const API_NAMESPACE = '/income-source';

export type TInitialIncomeSourceFormData = {
	title: string;
	amount: string;
	currency: string;
};

export const initialIncomeSourceFormControls: TInitialIncomeSourceFormData = {
	title: '',
	amount: '',
	currency: appConfig.defaultCurrency
};
