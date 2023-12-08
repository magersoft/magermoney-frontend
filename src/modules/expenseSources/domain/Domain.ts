import { IFetchState } from '@/shared/domain';
import { RequestReturnError } from '@/shared/types/api';
import {
	CreateExpenseSourceDto,
	ExpenseSourceEntity,
	UpdateExpenseSourceDto
} from '@/shared/types/api/generated';
import { CRUDModel } from '@/shared/types/models';

export namespace NExpenseSources {
	export const API_NAMESPACE = 'expense-sources';

	export interface IExpenseSource extends ExpenseSourceEntity {}
	export interface ICreateExpenseSource extends CreateExpenseSourceDto {}
	export interface IUpdateExpenseSource extends UpdateExpenseSourceDto {}

	export interface IState extends IFetchState {
		expenseSources: IExpenseSource[];
		expenseSource: IExpenseSource | null;
	}

	export interface IModel
		extends CRUDModel<
			IExpenseSource,
			ICreateExpenseSource,
			IUpdateExpenseSource
		> {}

	export interface IError extends RequestReturnError {}
}
