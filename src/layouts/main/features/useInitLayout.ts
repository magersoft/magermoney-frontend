import { useAuth } from '@/app/auth';
import { useUser } from '@/app/user';

export function useInitLayout() {
	const { user, isAuthorization } = useAuth();
	const { fetchUser } = useUser();

	const fetchData = () => {
		if (unref(isAuthorization)) {
			Promise.all([fetchUser({ showError: true }, unref(user)!.id)]);
		}
	};

	fetchData();
}
