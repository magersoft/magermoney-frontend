import { IFetchState } from '@/shared/domain';
import { RequestReturnError, RequestReturnValue } from '@/shared/types/api';
import {
	AmountByPercentDto,
	PercentByAmountDto,
	TotalBalanceDto
} from '@/shared/types/api/generated';

export namespace NCalculations {
	export const API_NAMESPACE = 'calculations';

	export interface ITotalBalance extends TotalBalanceDto {}
	export interface IPercentByAmount extends PercentByAmountDto {}
	export interface IAmountByPercent extends AmountByPercentDto {}

	export interface IState extends IFetchState {
		totalBalance: ITotalBalance | null;
		percentByAmount: IPercentByAmount | null;
		amountByPercent: IAmountByPercent | null;
	}

	export interface IModel {
		fetchTotalBalance: (currency: string) => RequestReturnValue<ITotalBalance>;
		fetchPercentByAmount: (
			amount: string,
			currency: string
		) => RequestReturnValue<IPercentByAmount>;
		fetchAmountByPercent: (
			amount: string,
			currency: string
		) => RequestReturnValue<IAmountByPercent>;
	}

	export interface IError extends RequestReturnError {}
}
