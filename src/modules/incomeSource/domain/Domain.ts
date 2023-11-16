import { IFetchState } from '@/shared/domain';
import {
	CreateIncomeSourceDto,
	IncomeSourceEntity,
	UpdateIncomeSourceDto
} from '@/shared/infrastructure/api/generated';
import { RequestReturnError, RequestReturnValue } from '@/shared/types/api';

export namespace NIncomeSource {
	export interface IIncomeSource extends IncomeSourceEntity {}
	export interface ICreateIncomeSource extends CreateIncomeSourceDto {}
	export interface IUpdateIncomeSource extends UpdateIncomeSourceDto {}

	export interface IState extends IFetchState {
		incomeSources: IIncomeSource[];
		incomeSource: IIncomeSource | null;
	}

	export interface IModel {
		findAll: () => RequestReturnValue<IIncomeSource[]>;
		findOne: (id: number) => RequestReturnValue<IIncomeSource>;
		create: (payload: ICreateIncomeSource) => RequestReturnValue<IIncomeSource>;
		update: (
			id: number,
			payload: IUpdateIncomeSource
		) => RequestReturnValue<IIncomeSource>;
		remove: (id: number) => RequestReturnValue<IIncomeSource>;
	}

	export interface IError extends RequestReturnError {}
}
