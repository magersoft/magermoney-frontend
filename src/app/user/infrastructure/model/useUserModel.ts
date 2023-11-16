import { API_NAMESPACE, NUser } from '@/app/user/domain';
import { useApiFetch } from '@/shared/infrastructure/api';

export const useUserModel = (): NUser.IModel => {
	const { fetch } = useApiFetch();
	const findOne = (id: number) =>
		fetch<NUser.IUser>(`${API_NAMESPACE}/${id}`).get();

	return {
		findOne
	};
};
