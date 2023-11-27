import { appConfig } from '@/app/config';

export type TInitialAccumulatedFundsFormData = {
	source: string;
	amount: string;
	currency: string;
};

export const initialAccumulatedFundsFormControls: TInitialAccumulatedFundsFormData =
	{
		source: '',
		amount: '',
		currency: appConfig.defaultCurrency
	};
