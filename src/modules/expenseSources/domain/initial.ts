import { appConfig } from '@/app/config';

export type TInitialExpenseSourcesFormData = {
	title: string;
	amount: string;
	currency: string;
	categoryId?: number;
};

export const initialExpenseSourcesFormControls: TInitialExpenseSourcesFormData =
	{
		title: '',
		amount: '',
		currency: appConfig.defaultCurrency,
		categoryId: undefined
	};
