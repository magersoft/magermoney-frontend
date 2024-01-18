import { appConfig } from '@/app/config';

export type TInitialSavedFundsFormData = {
	source: string;
	amount: string;
	currency: string;
	categoryId?: number;
};

export const initialSavedFundsFormControls: TInitialSavedFundsFormData = {
	source: '',
	amount: '',
	currency: appConfig.defaultCurrency,
	categoryId: undefined
};
