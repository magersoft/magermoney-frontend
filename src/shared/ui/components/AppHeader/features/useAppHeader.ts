import { useAppStore } from '@/shared/infrastructure/stores';

export function useAppHeader() {
	const { setHeader, resetHeader, header } = useAppStore();

	const isHidden = computed(() => unref(header).isHidden);
	const title = computed(() => unref(header).title);
	const textLeft = computed(() => unref(header).textLeft);
	const textRight = computed(() => unref(header).textRight);
	const isLeftArrow = computed(() => unref(header).isLeftArrow);
	const actions = computed(() => unref(header).actions);
	const onClickLeft = computed(() => unref(header).onClickLeft);
	const onClickRight = computed(() => unref(header).onClickRight);
	const onSelectAction = computed(() => unref(header).onSelectAction);

	return {
		isHidden,
		title,
		textLeft,
		textRight,
		isLeftArrow,
		onClickLeft,
		onClickRight,
		onSelectAction,
		actions,
		setHeader,
		resetHeader
	};
}
