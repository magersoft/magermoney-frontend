import { useCategories } from '@/modules/categories';

export function useInitWalletSaveForm() {
	const { fetchSavedCategories } = useCategories();

	const fetchData = async () => {
		await Promise.all([fetchSavedCategories()]);
	};

	fetchData();
}
