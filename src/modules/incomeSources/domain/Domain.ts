import { IFetchState } from '@/shared/domain';
import { RequestReturnError } from '@/shared/types/api';
import {
	CreateIncomeSourceDto,
	IncomeSourceEntity,
	UpdateIncomeSourceDto
} from '@/shared/types/api/generated';
import { CRUDModel } from '@/shared/types/models';

export namespace NIncomeSources {
	export interface IIncomeSource extends IncomeSourceEntity {}
	export interface ICreateIncomeSource extends CreateIncomeSourceDto {}
	export interface IUpdateIncomeSource extends UpdateIncomeSourceDto {}

	export interface IState extends IFetchState {
		incomeSources: IIncomeSource[];
		incomeSource: IIncomeSource | null;
	}

	export interface IModel
		extends CRUDModel<
			IIncomeSource,
			ICreateIncomeSource,
			IUpdateIncomeSource
		> {}

	export interface IError extends RequestReturnError {}
}
