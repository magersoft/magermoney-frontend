import { useAuthModel } from '@/modules/auth/infrastructure/models';
import { useAuthStore } from '@/modules/auth/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useVerifyUserService() {
	const { setAuthTokens, setIsLoading, setError } = useAuthStore();
	const { verifyUser } = useAuthModel();

	const { fetchBase: verifyAuthCode } = useBaseFetch({
		fetchData: verifyUser,
		setData: setAuthTokens,
		setIsLoading,
		setError
	});

	return {
		verifyAuthCode
	};
}
