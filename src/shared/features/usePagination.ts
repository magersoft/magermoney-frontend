import appConfig from '@/app/config/app.config.ts';

export function usePagination(initialPage = 1) {
	const page = ref(initialPage);
	const pageSize = ref(appConfig.defaultPaginationPageSize);

	const setPage = (value: number) => {
		page.value = value;
	};

	const setPageSize = (value: number) => {
		pageSize.value = value;
	};

	return {
		page,
		pageSize,
		setPage,
		setPageSize
	};
}
