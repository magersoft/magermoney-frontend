import { IFetchState } from '@/shared/domain';
import { RequestReturnError } from '@/shared/types/api';
import {
	CreateTransferDto,
	TransferEntity,
	UpdateTransferDto
} from '@/shared/types/api/generated';
import { CRUDModel } from '@/shared/types/models';

export namespace NTransfers {
	export const API_NAMESPACE = 'transfers';

	export interface ITransfer extends TransferEntity {}
	export interface ICreateTransfer extends CreateTransferDto {}
	export interface IUpdateTransfer extends UpdateTransferDto {}

	export interface IState extends IFetchState {
		transfers: ITransfer[];
		transfer: ITransfer | null;
	}

	export interface IModel
		extends CRUDModel<ITransfer, ICreateTransfer, IUpdateTransfer> {}

	export interface IError extends RequestReturnError {}
}
