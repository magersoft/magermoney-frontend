import { appConfig } from '@/app/config';

export type TInitialIncomeFormData = {
	title: string;
	amount: string;
	currency: string;
};

export const initialIncomeFormData: TInitialIncomeFormData = {
	title: '',
	amount: '',
	currency: appConfig.defaultCurrency
};
