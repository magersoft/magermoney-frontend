import { IFetchState } from '@/shared/domain';
import { RequestReturnError } from '@/shared/types/api';
import {
	CreateExpenseDto,
	ExpenseEntity,
	ExpensesControllerFindAllParams,
	UpdateExpenseDto
} from '@/shared/types/api/generated';
import { CRUDModel } from '@/shared/types/models';

export namespace NExpenses {
	export const API_NAMESPACE = 'expenses';

	export interface IExpense extends ExpenseEntity {}
	export interface ICreateExpense extends CreateExpenseDto {}
	export interface IUpdateExpense extends UpdateExpenseDto {}

	export interface IQueryExpenses extends ExpensesControllerFindAllParams {}

	export interface IState extends IFetchState {
		expenses: IExpense[];
		expense: IExpense | null;
	}

	export interface IModel
		extends CRUDModel<
			IExpense,
			ICreateExpense,
			IUpdateExpense,
			IQueryExpenses
		> {}

	export interface IError extends RequestReturnError {}
}
