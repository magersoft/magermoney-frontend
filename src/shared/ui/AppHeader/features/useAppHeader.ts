import { useAppHeaderStore } from '@/shared/infrastructure/stores';

export function useAppHeader() {
	const {
		setHeader,
		restoreStore: resetHeader,
		...header
	} = useAppHeaderStore();

	return {
		...header,
		setHeader,
		resetHeader
	};
}
