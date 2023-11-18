import { useFetchUserService } from '@/modules/users/infrastructure/services';
import { useUsersStore } from '@/modules/users/infrastructure/stores';

export function useUser() {
	const { user } = useUsersStore();
	const { fetchUser } = useFetchUserService();

	return {
		fetchUser,
		user
	};
}
