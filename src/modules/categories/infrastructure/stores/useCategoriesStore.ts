import { defineStore } from 'pinia';

import { NCategories } from '@/modules/categories/domain';
import { fetchPaginatedStateInitialState } from '@/shared/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const categoriesStore = defineStore('categories', {
	state: (): NCategories.IState => ({
		...fetchPaginatedStateInitialState,
		categories: [],
		incomeCategories: [],
		expenseCategories: [],
		savedCategories: [],
		category: null
	}),
	actions: {
		setCategories(categories: NCategories.ICategory[]) {
			this.categories = categories;
		},
		setIncomeCategories(categories: NCategories.ICategory[]) {
			this.incomeCategories = categories;
		},
		setExpenseCategories(categories: NCategories.ICategory[]) {
			this.expenseCategories = categories;
		},
		setSavedCategories(categories: NCategories.ICategory[]) {
			this.savedCategories = categories;
		},
		setCategory(category: NCategories.ICategory) {
			this.category = category;
		},
		setIsLoading(value: boolean) {
			this.isLoading = value;
		},
		setIsFinished(value: boolean) {
			this.isFinished = value;
		},
		setPage(value: number) {
			this.page = value;
		},
		setPageSize(value: number) {
			this.pageSize = value;
		},
		setError(error: NCategories.IError | null) {
			this.error = error;
		}
	}
});

export const useCategoriesStore = () => useStoreAdapter(categoriesStore());
