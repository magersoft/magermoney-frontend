import { API_NAMESPACE, NAuth } from '@/modules/auth/domain';
import { useApiFetch } from '@/shared/infrastructure/api';

export const useAuthModel = (): NAuth.IModel => {
	const { fetch } = useApiFetch();

	const detectUser = (payload: NAuth.ILoginAuth) =>
		fetch<NAuth.IDetectUser>(`/${API_NAMESPACE}/detect-user`).post(payload);

	const verifyUser = (payload: NAuth.IVerifyAuth) =>
		fetch<NAuth.IVerifyUser>(`/${API_NAMESPACE}/verify-user`).post(payload);

	return {
		detectUser,
		verifyUser
	};
};
