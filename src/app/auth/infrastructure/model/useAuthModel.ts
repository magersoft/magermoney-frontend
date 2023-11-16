import { NAuth } from '@/app/auth/domain';
import { useApiFetch } from '@/shared/infrastructure/api';

export const useAuthModel = (): NAuth.IModel => {
	const { fetch } = useApiFetch();

	const detectUser = (payload: NAuth.ILoginAuth) =>
		fetch<NAuth.IDetectUser>('/auth/detect-user').post(payload);

	const verifyUser = (payload: NAuth.IVerifyAuth) =>
		fetch<NAuth.IVerifyUser>('/auth/verify-user').post(payload);

	return {
		detectUser,
		verifyUser
	};
};
