import { IFetchState } from '@/shared/domain';
import { RequestReturnError, RequestReturnValue } from '@/shared/types/api';
import { CurrencyEntity } from '@/shared/types/api/generated';

export namespace NCurrencies {
	export const API_NAMESPACE = 'currencies';

	export interface ICurrency extends CurrencyEntity {}

	export interface IState extends IFetchState {
		currencies: ICurrency[];
	}

	export interface IModel {
		fetchAll: () => RequestReturnValue<ICurrency[]>;
	}

	export interface IError extends RequestReturnError {}
}
