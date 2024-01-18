import { IFetchState } from '@/shared/domain';
import { RequestReturnError } from '@/shared/types/api';
import {
	CategoriesControllerFindAllParams,
	CategoryEntity,
	CategoryRelationEntity,
	CreateCategoryDto,
	UpdateCategoryDto
} from '@/shared/types/api/generated';
import { CRUDModel } from '@/shared/types/models';

export namespace NCategories {
	export const API_NAMESPACE = 'categories';

	export interface ICategory extends CategoryEntity {}
	export interface ICategoryRelation extends CategoryRelationEntity {}
	export interface ICreateCategory extends CreateCategoryDto {}
	export interface IUpdateCategory extends UpdateCategoryDto {}

	export interface IQueryCategories extends CategoriesControllerFindAllParams {}

	export interface IState extends IFetchState {
		categories: ICategory[];
		category: ICategory | null;
	}

	export interface IModel
		extends CRUDModel<
			ICategory,
			ICreateCategory,
			IUpdateCategory,
			IQueryCategories
		> {}

	export interface IError extends RequestReturnError {}

	export enum CategoryType {
		INCOME = 'INCOME',
		EXPENSE = 'EXPENSE',
		SAVED = 'SAVED'
	}
}
