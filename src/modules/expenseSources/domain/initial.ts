import { appConfig } from '@/app/config';

export type TInitialExpenseSourcesFormData = {
	title: string;
	amount: string;
	currency: string;
};

export const initialExpenseSourcesFormControls: TInitialExpenseSourcesFormData =
	{
		title: '',
		amount: '',
		currency: appConfig.defaultCurrency
	};
