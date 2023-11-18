import { useUsersModel } from '@/modules/users/infrastructure/models';
import { useUsersStore } from '@/modules/users/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useFetchUserService() {
	const { setUser, setIsLoading, setError } = useUsersStore();
	const { findOne } = useUsersModel();

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
