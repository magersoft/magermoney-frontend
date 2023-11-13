import { NAuth } from '@/app/auth/domain';
import { useApiFetch } from '@/shared/infrastructure/api';

export const useAuthModel = (): NAuth.IModel => {
	const detectUser = (payload: NAuth.ILoginAuth) =>
		useApiFetch<NAuth.IDetectUser>('/auth/detect-user').post(payload);

	const verifyUser = (payload: NAuth.IVerifyAuth) =>
		useApiFetch<NAuth.IVerifyUser>('/auth/verify-user').post(payload);

	return {
		detectUser,
		verifyUser
	};
};
