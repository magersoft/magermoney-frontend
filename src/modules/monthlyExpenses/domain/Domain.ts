import { IFetchState } from '@/shared/domain';
import { RequestReturnError } from '@/shared/types/api';
import {
	CreateMonthlyExpenseDto,
	MonthlyExpenseEntity,
	UpdateMonthlyExpenseDto
} from '@/shared/types/api/generated';
import { CRUDModel } from '@/shared/types/models';

export namespace NMonthlyExpenses {
	export const API_NAMESPACE = 'monthly-expenses';

	export interface IMonthlyExpense extends MonthlyExpenseEntity {}
	export interface ICreateMonthlyExpense extends CreateMonthlyExpenseDto {}
	export interface IUpdateMonthlyExpense extends UpdateMonthlyExpenseDto {}

	export interface IState extends IFetchState {
		monthlyExpenses: IMonthlyExpense[];
		monthlyExpense: IMonthlyExpense | null;
	}

	export interface IModel
		extends CRUDModel<
			IMonthlyExpense,
			ICreateMonthlyExpense,
			IUpdateMonthlyExpense
		> {}

	export interface IError extends RequestReturnError {}
}
