import { useFetchUserService } from '@/app/user/infrastructure/services';

export function useUser() {
	const { fetchUser } = useFetchUserService();

	return {
		fetchUser
	};
}
