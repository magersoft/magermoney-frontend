import { useAuthModel } from '@/modules/auth/infrastructure/models';
import { useAuthStore } from '@/modules/auth/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useDetectUserService() {
	const { setUser, setIsLoading, setError } = useAuthStore();
	const { detectUser } = useAuthModel();

	const { fetchBase: createOrLoginUser } = useBaseFetch({
		fetchData: detectUser,
		setData: setUser,
		setIsLoading,
		setError
	});

	return {
		createOrLoginUser
	};
}
