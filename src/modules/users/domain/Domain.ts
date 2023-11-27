import { IFetchState } from '@/shared/domain';
import { RequestReturnError } from '@/shared/types/api';
import {
	CreateUserDto,
	UpdateUserDto,
	UserEntity
} from '@/shared/types/api/generated';
import { CRUDModel } from '@/shared/types/models';

export namespace NUsers {
	export const API_NAMESPACE = 'users';

	export interface IUser extends UserEntity {}
	export interface ICreateUser extends CreateUserDto {}
	export interface IUpdateUser extends UpdateUserDto {}

	export interface IState extends IFetchState {
		user: IUser | null;
	}

	export interface IModel extends CRUDModel<IUser, ICreateUser, IUpdateUser> {}

	export interface IError extends RequestReturnError {}
}
