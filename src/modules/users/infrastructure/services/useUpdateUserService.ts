import { useUsersModel } from '@/modules/users/infrastructure/models';
import { useUsersStore } from '@/modules/users/infrastructure/stores';
import { useBaseUpdate } from '@/shared/infrastructure/services';

export function useUpdateUserService() {
	const { user, setUser, setIsLoading, setError } = useUsersStore();
	const { update } = useUsersModel();

	const { updateBase: updateUser } = useBaseUpdate({
		updateData: update,
		data: user,
		setData: setUser,
		setIsLoading,
		setError
	});

	return {
		updateUser
	};
}
