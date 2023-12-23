import { IFetchState } from '@/shared/domain';
import { RequestReturnError, RequestReturnValue } from '@/shared/types/api';
import {
	HistoryControllerFindAllParams,
	HistoryEntity
} from '@/shared/types/api/generated';

export namespace NHistory {
	export const API_NAMESPACE = 'history';

	export interface IHistory extends HistoryEntity {}

	export interface IQueryHistory extends HistoryControllerFindAllParams {}

	export interface IState extends IFetchState {
		history: IHistory[];
	}

	export interface IModel {
		findAll(query?: IQueryHistory): RequestReturnValue<IHistory[]>;
	}

	export interface IError extends RequestReturnError {}
}
