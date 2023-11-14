import { IFetchState } from '@/shared/domain';
import { UserEntity } from '@/shared/infrastructure/api/generated';
import { RequestReturnError, RequestReturnValue } from '@/shared/types/api';

export namespace NUser {
	export interface IUser extends UserEntity {}

	export interface IState extends IFetchState {
		user: IUser | null;
	}

	export interface IModel {
		findOne: (id: number) => RequestReturnValue<IUser>;
	}

	export interface IError extends RequestReturnError {}
}
