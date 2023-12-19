import { useAppStore } from '@/shared/infrastructure/stores';

export function useAppHeader() {
	const { setHeader, resetHeader, header } = useAppStore();

	return {
		header,
		setHeader,
		resetHeader
	};
}
