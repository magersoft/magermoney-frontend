import { useUserModel } from '@/modules/user/infrastructure/model';
import { useUserStore } from '@/modules/user/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

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
