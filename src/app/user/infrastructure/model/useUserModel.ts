import { NUser } from '@/app/user/domain';
import { useApiFetch } from '@/shared/infrastructure/api';

export const useUserModel = (): NUser.IModel => {
	const findOne = (id: number) => useApiFetch<NUser.IUser>(`/user/${id}`).get();

	return {
		findOne
	};
};
