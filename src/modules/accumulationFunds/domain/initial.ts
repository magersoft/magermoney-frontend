import { appConfig } from '@/app/config';

export type TInitialAccumulationFundsFormData = {
	percent: string;
	amount: string;
	currency: string;
};

export const initialAccumulationFundsFormControls: TInitialAccumulationFundsFormData =
	{
		percent: '',
		amount: '',
		currency: appConfig.defaultCurrency
	};
