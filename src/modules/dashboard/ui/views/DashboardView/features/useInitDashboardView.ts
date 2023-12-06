import { useInitDashboard } from '@/modules/dashboard/features';

export function useInitDashboardView() {
	const { fetchDashboard, isLoading } = useInitDashboard();

	fetchDashboard();

	return {
		fetchDashboard,
		isLoading
	};
}
