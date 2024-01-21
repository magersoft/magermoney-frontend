import { useCalculations } from '@/modules/calculations';
import { useCurrencies } from '@/modules/currencies';
import { useSavedFunds } from '@/modules/savedFunds';
import { useSettingsStore } from '@/modules/settings/infrastructure/stores';

export const useInitDashboard = () => {
	const { currency } = useSettingsStore();
	const {
		fetchTotalBalance,
		fetchTotalIncomes,
		fetchTotalExpenses,
		fetchMonthlyBudget
	} = useCalculations();
	const { fetchSavedFunds } = useSavedFunds();
	const { fetchCurrenciesRates } = useCurrencies();

	const isLoading = ref(false);

	const fetchDashboard = async () => {
		isLoading.value = true;

		await fetchTotalBalance({ force: true, showError: true }, unref(currency));
		await fetchTotalIncomes(
			{ force: true, showError: true },
			{ currency: unref(currency) }
		);
		await fetchTotalExpenses(
			{ force: true, showError: true },
			{ currency: unref(currency) }
		);
		await fetchMonthlyBudget({ force: true, showError: true }, unref(currency));
		await fetchSavedFunds({ force: true, showError: true });
		await fetchCurrenciesRates({ force: true, showError: true });

		isLoading.value = false;
	};

	return {
		fetchDashboard,
		isLoading
	};
};
