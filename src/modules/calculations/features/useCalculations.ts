import {
	useFetchAmountByPercentService,
	useFetchMonthlyBudgetService,
	useFetchPercentByAmountService,
	useFetchSummaryExpensesByCategoriesService,
	useFetchSummaryIncomesByCategoriesService,
	useFetchTotalBalanceService,
	useFetchTotalExpensesService,
	useFetchTotalIncomesService,
	useFetchTransferDetailsService
} from '@/modules/calculations/infrastructure/services';
import { useCalculationsStore } from '@/modules/calculations/infrastructure/stores';
import { translateCategories } from '@/modules/currencies/utils';

export function useCalculations() {
	const {
		totalBalance,
		totalIncomes,
		totalExpenses,
		monthlyBudget,
		amountByPercent,
		roundedAmountByPercent,
		percentByAmount,
		roundedPercentByAmount,
		isLoading,
		balanceAccumulationAmount,
		balanceMinusAccumulationPercent,
		balanceAccumulationCurrency,
		transferDetails,
		summaryIncomesByCategories,
		summaryExpensesByCategories,
		hasSummaryIncomesByCategories,
		hasSummaryExpensesByCategories,
		restoreStore: restoreCalculationsStore,
		error
	} = useCalculationsStore();

	const { fetchTotalBalance } = useFetchTotalBalanceService();
	const { fetchTotalIncomes } = useFetchTotalIncomesService();
	const { fetchTotalExpenses } = useFetchTotalExpensesService();
	const { fetchMonthlyBudget } = useFetchMonthlyBudgetService();
	const { fetchPercentByAmount } = useFetchPercentByAmountService();
	const { fetchAmountByPercent } = useFetchAmountByPercentService();
	const { fetchTransferDetails } = useFetchTransferDetailsService();
	const { fetchSummaryIncomesByCategories } =
		useFetchSummaryIncomesByCategoriesService();
	const { fetchSummaryExpensesByCategories } =
		useFetchSummaryExpensesByCategoriesService();

	return {
		totalBalance,
		totalIncomes,
		totalExpenses,
		monthlyBudget,
		transferDetails,

		percentByAmount,
		roundedPercentByAmount,

		amountByPercent,
		roundedAmountByPercent,

		balanceAccumulationAmount,
		balanceMinusAccumulationPercent,
		balanceAccumulationCurrency,

		summaryIncomesByCategories: computed(() =>
			unref(summaryIncomesByCategories).map((item) => ({
				...item,
				title: translateCategories({ name: item.title })
			}))
		),
		summaryExpensesByCategories: computed(() =>
			unref(summaryExpensesByCategories).map((item) => ({
				...item,
				title: translateCategories({ name: item.title })
			}))
		),
		hasSummaryIncomesByCategories,
		hasSummaryExpensesByCategories,

		fetchTotalBalance,
		fetchTotalIncomes,
		fetchTotalExpenses,
		fetchMonthlyBudget,
		fetchPercentByAmount,
		fetchAmountByPercent,
		fetchTransferDetails,
		fetchSummaryIncomesByCategories,
		fetchSummaryExpensesByCategories,

		isLoading,
		restoreCalculationsStore,
		error
	};
}
