import { IFetchState } from '@/shared/domain';
import { RequestReturnError, RequestReturnValue } from '@/shared/types/api';
import {
	DetectUserEntity,
	LoginAuthDto,
	VerifyAuthDto,
	VerifyUserEntity
} from '@/shared/types/api/generated';

export namespace NAuth {
	export const API_NAMESPACE = 'auth';

	export interface IDetectUser extends DetectUserEntity {}
	export interface IVerifyUser extends VerifyUserEntity {}
	export interface ILoginAuth extends LoginAuthDto {}
	export interface IVerifyAuth extends VerifyAuthDto {}

	export interface IState extends IFetchState<IError> {
		isAuthorization: boolean;
		accessToken: string | null;
		expireDate: number;
		user: IDetectUser | null;
	}

	export interface IModel {
		detectUser: (payload: ILoginAuth) => RequestReturnValue<IDetectUser>;
		verifyUser: (payload: IVerifyAuth) => RequestReturnValue<IVerifyUser>;
	}

	export interface IError extends RequestReturnError {}
}
