import { IFetchState } from '@/shared/domain';
import { RequestReturnError, RequestReturnValue } from '@/shared/types/api';
import {
	CreateAllByUserDto,
	CurrencyEntity
} from '@/shared/types/api/generated';

export namespace NCurrencies {
	export const API_NAMESPACE = 'currencies';

	export interface ICurrency extends CurrencyEntity {}
	export interface ICreateAll extends CreateAllByUserDto {}

	export interface IState extends IFetchState {
		currencies: ICurrency[];
		currenciesList: ICurrency[];
		currenciesIds: number[];
	}

	export interface IModel {
		fetchAll: () => RequestReturnValue<ICurrency[]>;
		fetchList: () => RequestReturnValue<ICurrency[]>;
		createAll: (payload: ICreateAll) => RequestReturnValue<ICurrency[]>;
	}

	export interface IError extends RequestReturnError {}
}
