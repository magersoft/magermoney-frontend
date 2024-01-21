import { NCategories } from '@/modules/categories/domain';

export const categoriesTypes = {
	[NCategories.CategoryType.INCOME]: 'incomes',
	[NCategories.CategoryType.EXPENSE]: 'expenses',
	[NCategories.CategoryType.SAVED]: 'wallet'
};
