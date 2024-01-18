import { useCategories } from '@/modules/categories';

export function useInitWalletSaveForm() {
	const { fetchCategories } = useCategories();

	const fetchData = async () => {
		await Promise.all([fetchCategories({ showError: true })]);
	};

	fetchData();
}
