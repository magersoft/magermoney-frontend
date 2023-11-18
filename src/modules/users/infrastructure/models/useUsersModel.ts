import { API_NAMESPACE, NUsers } from '@/modules/users/domain';
import { useApiFetch } from '@/shared/infrastructure/api';

export const useUsersModel = (): NUsers.IModel => {
	const { fetch } = useApiFetch();
	const findOne = (id: number) =>
		fetch<NUsers.IUser>(`/${API_NAMESPACE}/${id}`).get();

	const findAll = () => fetch<NUsers.IUser[]>(`/${API_NAMESPACE}`).get();

	const create = (payload: NUsers.ICreateUser) =>
		fetch<NUsers.IUser>(`/${API_NAMESPACE}`).post(payload);

	const update = (id: number, payload: NUsers.IUpdateUser) =>
		fetch<NUsers.IUser>(`/${API_NAMESPACE}/${id}`).put(payload);

	const remove = (id: number) =>
		fetch<NUsers.IUser>(`/${API_NAMESPACE}/${id}`).delete();

	return {
		findOne,
		findAll,
		create,
		update,
		remove
	};
};
