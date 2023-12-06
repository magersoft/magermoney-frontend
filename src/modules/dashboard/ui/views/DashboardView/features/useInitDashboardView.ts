import { useInitDashboard } from '@/modules/dashboard/features';

export function useInitDashboardView() {
	const { fetchDashboard } = useInitDashboard();

	fetchDashboard();
}
