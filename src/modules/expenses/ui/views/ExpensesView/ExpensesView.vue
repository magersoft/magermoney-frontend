<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import { AppPopups, usePopups } from '@/app/popups';
import { AppRoutes } from '@/app/router/constants';
import {
	ExpensesFilters,
	ExpensesList,
	ExpensesSummary
} from '@/modules/expenses/ui/components';
import { useExpensesList } from '@/modules/expenses/ui/components/ExpensesList/features';
import { useAppHeader, useAppNav } from '@/shared/ui/components';

const { t } = useI18n();
const { setHeader } = useAppHeader();
const { setNav } = useAppNav();
const { setPopup } = usePopups();
const router = useRouter();

const { isLoading, isRefreshLoading, handleRefresh } = useExpensesList();

setHeader({
	isLeftArrow: true,
	textLeft: t('back'),
	textRight: t('add'),
	onClickLeft: () => {
		router.push({ name: AppRoutes.Dashboard });
	},
	onClickRight: () => {
		setPopup(AppPopups.AddExpense, {
			onSuccess: handleRefresh
		});
	}
});
setNav({
	popupOptions: {
		onSuccess: handleRefresh
	}
});

const disabledPullRefresh = ref(false);
</script>

<template>
	<van-pull-refresh
		:model-value="isRefreshLoading"
		:disabled="disabledPullRefresh || isLoading"
		:class="$style['expenses-view']"
		@refresh="handleRefresh"
	>
		<expenses-filters
			@calendar:opened="disabledPullRefresh = true"
			@calendar:closed="disabledPullRefresh = false"
		/>
		<expenses-summary />
		<expenses-list :is-refresh-loading="isRefreshLoading" />
	</van-pull-refresh>
</template>

<style module lang="scss">
@import './styles/ExpensesView.module';
</style>
