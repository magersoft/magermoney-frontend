import { appConfig } from '@/app/config';

export type TInitialMonthlyExpensesFormData = {
	title: string;
	amount: string;
	currency: string;
};

export const initialMonthlyExpensesFormControls: TInitialMonthlyExpensesFormData =
	{
		title: '',
		amount: '',
		currency: appConfig.defaultCurrency
	};
