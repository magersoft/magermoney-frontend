import { useUserModel } from '@/app/user/infrastructure/model';
import { useUserStore } from '@/app/user/infrastructure/stores';
import { useBaseFetch } from '@/shared/services';

export function useFetchUserService() {
	const { setUser, setIsLoading, setError } = useUserStore();
	const { findOne } = useUserModel();

	const { fetchBase: fetchUser } = useBaseFetch({
		fetchData: findOne,
		setData: setUser,
		setIsLoading,
		setError
	});

	return {
		fetchUser
	};
}
