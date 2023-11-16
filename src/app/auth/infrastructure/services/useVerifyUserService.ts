import { useAuthModel } from '@/app/auth/infrastructure/model';
import { useAuthStore } from '@/app/auth/infrastructure/stores';
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
