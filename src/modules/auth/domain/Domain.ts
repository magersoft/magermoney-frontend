import { IFetchState } from '@/shared/domain';
import {
	DetectUserDto,
	LoginAuthDto,
	VerifyAuthDto,
	VerifyUserDto
} from '@/shared/infrastructure/api/generated';
import { RequestReturnError, RequestReturnValue } from '@/shared/types/api';

export namespace NAuth {
	export interface ILoginAuth extends LoginAuthDto {}

	export interface IDetectUser extends DetectUserDto {}

	export interface IVerifyAuth extends VerifyAuthDto {}

	export interface IVerifyUser extends VerifyUserDto {}

	export interface IError extends RequestReturnError {}

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
}
