import { useAuthModel } from '@/app/auth/infrastructure/model';
import { useAuthStore } from '@/app/auth/infrastructure/stores';
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
