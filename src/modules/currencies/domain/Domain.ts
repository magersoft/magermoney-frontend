import { IFetchState } from '@/shared/domain';
import { RequestReturnError, RequestReturnValue } from '@/shared/types/api';
import { CurrencyEntity } from '@/shared/types/api/generated';

export namespace NCurrencies {
	export interface ICurrency extends CurrencyEntity {}

	export interface IState extends IFetchState {
		currencies: ICurrency[];
	}

	export interface IModel {
		findAll: () => RequestReturnValue<ICurrency[]>;
	}

	export interface IError extends RequestReturnError {}
}