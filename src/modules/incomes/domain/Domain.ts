import { IFetchState } from '@/shared/domain';
import { RequestReturnError } from '@/shared/types/api';
import {
	CreateIncomeDto,
	IncomeEntity,
	IncomesControllerFindAllParams,
	UpdateIncomeDto
} from '@/shared/types/api/generated';
import { CRUDModel } from '@/shared/types/models';

export namespace NIncomes {
	export const API_NAMESPACE = 'incomes';

	export interface IIncome extends IncomeEntity {}
	export interface ICreateIncome extends CreateIncomeDto {}
	export interface IUpdateIncome extends UpdateIncomeDto {}

	export interface IQueryIncomes extends IncomesControllerFindAllParams {}

	export interface IState extends IFetchState {
		incomes: IIncome[];
		income: IIncome | null;
	}

	export interface IModel
		extends CRUDModel<IIncome, ICreateIncome, IUpdateIncome, IQueryIncomes> {}

	export interface IError extends RequestReturnError {}
}
