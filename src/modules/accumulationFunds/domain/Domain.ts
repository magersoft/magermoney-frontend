import { IFetchState } from '@/shared/domain';
import { RequestReturnError } from '@/shared/types/api';
import {
	AccumulationFundEntity,
	CreateAccumulationFundDto,
	UpdateAccumulationFundDto
} from '@/shared/types/api/generated';
import { CRUDModel } from '@/shared/types/models';

export namespace NAccumulationFunds {
	export const API_NAMESPACE = 'accumulation-funds';

	export interface IAccumulationFund extends AccumulationFundEntity {}
	export interface ICreateAccumulationFund extends CreateAccumulationFundDto {}
	export interface IUpdateAccumulationFund extends UpdateAccumulationFundDto {}

	export interface IState extends IFetchState {
		accumulationFunds: IAccumulationFund[];
		accumulationFund: IAccumulationFund | null;
	}

	export interface IModel
		extends CRUDModel<
			IAccumulationFund,
			ICreateAccumulationFund,
			IUpdateAccumulationFund
		> {}

	export interface IError extends RequestReturnError {}
}
