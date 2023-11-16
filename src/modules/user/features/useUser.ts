import { useFetchUserService } from '@/modules/user/infrastructure/services';
import { useUserStore } from '@/modules/user/infrastructure/stores';

export function useUser() {
	const { user } = useUserStore();
	const { fetchUser } = useFetchUserService();

	return {
		fetchUser,
		user
	};
}
