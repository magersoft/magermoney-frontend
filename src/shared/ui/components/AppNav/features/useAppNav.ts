import { useAppStore } from '@/shared/infrastructure/stores';

export function useAppNav() {
	const { setNav, resetNav, nav } = useAppStore();

	const isHidden = computed(() => unref(nav).isHidden);

	return {
		isHidden,
		setNav,
		resetNav
	};
}
