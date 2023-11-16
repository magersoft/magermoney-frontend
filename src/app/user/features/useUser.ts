import { useFetchUserService } from '@/app/user/infrastructure/services';
import { useUserStore } from '@/app/user/infrastructure/stores';

export function useUser() {
	const { user } = useUserStore();
	const { fetchUser } = useFetchUserService();

	return {
		fetchUser,
		user
	};
}
