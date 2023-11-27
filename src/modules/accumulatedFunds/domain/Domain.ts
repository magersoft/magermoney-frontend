import { IFetchState } from '@/shared/domain';
import { RequestReturnError } from '@/shared/types/api';
import {
	AccumulatedFundEntity,
	CreateAccumulatedFundDto,
	UpdateAccumulatedFundDto
} from '@/shared/types/api/generated';
import { CRUDModel } from '@/shared/types/models';

export namespace NAccumulatedFunds {
	export const API_NAMESPACE = 'accumulated-funds';

	export interface IAccumulatedFund extends AccumulatedFundEntity {}
	export interface ICreateAccumulatedFund extends CreateAccumulatedFundDto {}
	export interface IUpdateAccumulatedFund extends UpdateAccumulatedFundDto {}

	export interface IState extends IFetchState {
		accumulatedFunds: IAccumulatedFund[];
		accumulatedFund: IAccumulatedFund | null;
	}

	export interface IModel
		extends CRUDModel<
			IAccumulatedFund,
			ICreateAccumulatedFund,
			IUpdateAccumulatedFund
		> {}

	export interface IError extends RequestReturnError {}
}
