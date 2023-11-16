import { useAppStore } from '@/shared/infrastructure/stores';

export function useAppHeader() {
	const { setHeader, resetHeader, header } = useAppStore();

	const isHidden = computed(() => unref(header).isHidden);
	const title = computed(() => unref(header).title);
	const textLeft = computed(() => unref(header).textLeft);
	const isLeftArrow = computed(() => unref(header).isLeftArrow);
	const onClickLeft = computed(() => unref(header).onClickLeft);

	return {
		isHidden,
		title,
		textLeft,
		isLeftArrow,
		onClickLeft,
		setHeader,
		resetHeader
	};
}
