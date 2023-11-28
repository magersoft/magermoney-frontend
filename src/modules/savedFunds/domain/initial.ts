import { appConfig } from '@/app/config';

export type TInitialSavedFundsFormData = {
	source: string;
	amount: string;
	currency: string;
};

export const initialSavedFundsFormControls: TInitialSavedFundsFormData = {
	source: '',
	amount: '',
	currency: appConfig.defaultCurrency
};
