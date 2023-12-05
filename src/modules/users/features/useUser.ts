import {
	useFetchUserService,
	useUpdateUserService
} from '@/modules/users/infrastructure/services';
import { useUsersStore } from '@/modules/users/infrastructure/stores';

export function useUser() {
	const { user, resetUser } = useUsersStore();
	const { fetchUser } = useFetchUserService();
	const { updateUser } = useUpdateUserService();

	return {
		fetchUser,
		updateUser,
		resetUser,
		user
	};
}
