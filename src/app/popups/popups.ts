import { AppPopups } from '@/app/popups/constants';

export const popups: Record<AppPopups, any> = {
	[AppPopups.AddIncome]: defineAsyncComponent(
		() =>
			import('@/modules/incomes/ui/popups/AddIncomePopup/AddIncomePopup.vue')
	),
	[AppPopups.AddExpense]: defineAsyncComponent(
		() =>
			import('@/modules/expenses/ui/popups/AddExpensePopup/AddExpensePopup.vue')
	),
	[AppPopups.SaveWallet]: defineAsyncComponent(
		() =>
			import('@/modules/wallets/ui/popups/SaveWalletPopup/SaveWalletPopup.vue')
	)
};
