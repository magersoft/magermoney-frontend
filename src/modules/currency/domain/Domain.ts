import { IFetchState } from '@/shared/domain';
import { CurrencyEntity } from '@/shared/infrastructure/api/generated';
import { RequestReturnError, RequestReturnValue } from '@/shared/types/api';

export namespace NCurrency {
	export interface ICurrency extends CurrencyEntity {}

	export interface IState extends IFetchState {
		currencies: ICurrency[];
	}

	export interface IModel {
		findAll: () => RequestReturnValue<ICurrency[]>;
	}

	export interface IError extends RequestReturnError {}
}
