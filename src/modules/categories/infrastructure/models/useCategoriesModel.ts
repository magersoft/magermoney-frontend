import { NCategories } from '@/modules/categories/domain';
import { useApiFetch } from '@/shared/infrastructure/api';

export const useCategoriesModel = (): NCategories.IModel => {
	const { fetch, getUrlWithQueryParams } = useApiFetch();

	const fetchAll = (query?: NCategories.IQueryCategories) =>
		fetch<NCategories.ICategory[]>(
			getUrlWithQueryParams(`/${NCategories.API_NAMESPACE}`, query)
		).get();

	const fetchOne = (id: number) =>
		fetch<NCategories.ICategory>(`/${NCategories.API_NAMESPACE}/${id}`).get();

	const create = (payload: NCategories.ICreateCategory) =>
		fetch<NCategories.ICategory>(`/${NCategories.API_NAMESPACE}`).post(payload);

	const update = (id: number, payload: NCategories.IUpdateCategory) =>
		fetch<NCategories.ICategory>(`/${NCategories.API_NAMESPACE}/${id}`).patch(
			payload
		);

	const remove = (id: number) =>
		fetch<NCategories.ICategory>(
			`/${NCategories.API_NAMESPACE}/${id}`
		).delete();

	return {
		fetchAll,
		fetchOne,
		create,
		update,
		remove
	};
};
