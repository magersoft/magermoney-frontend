import { IFetchState } from '@/shared/domain';
import { RequestReturnError } from '@/shared/types/api';
import {
	CreateSavedFundDto,
	SavedFundEntity,
	UpdateSavedFundDto
} from '@/shared/types/api/generated';
import { CRUDModel } from '@/shared/types/models';

export namespace NSavedFunds {
	export const API_NAMESPACE = 'saved-funds';

	export interface ISavedFund extends SavedFundEntity {}
	export interface ICreateSavedFund extends CreateSavedFundDto {}
	export interface IUpdateSavedFund extends UpdateSavedFundDto {}

	export interface IState extends IFetchState {
		savedFunds: ISavedFund[];
		savedFund: ISavedFund | null;
	}

	export interface IModel
		extends CRUDModel<ISavedFund, ICreateSavedFund, IUpdateSavedFund> {}

	export interface IError extends RequestReturnError {}
}
