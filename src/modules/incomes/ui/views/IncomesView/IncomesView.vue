<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import { AppPopups, usePopups } from '@/app/popups';
import { AppRoutes } from '@/app/router/constants';
import {
	IncomesFilters,
	IncomesList,
	IncomesSummary
} from '@/modules/incomes/ui/components';
import { useIncomesList } from '@/modules/incomes/ui/components/IncomesList/features';
import { useAppHeader, useAppNav } from '@/shared/ui/components';

const { t } = useI18n();
const { setHeader } = useAppHeader();
const { setNav } = useAppNav();
const router = useRouter();
const { setPopup } = usePopups();

const { isLoading, isRefreshLoading, handleRefresh } = useIncomesList();

setHeader({
	isLeftArrow: true,
	textLeft: t('back'),
	textRight: t('add'),
	onClickLeft: () => {
		router.push({ name: AppRoutes.Dashboard });
	},
	onClickRight: () => {
		setPopup(AppPopups.AddIncome, {
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
		:class="$style['incomes-view']"
		@refresh="handleRefresh"
	>
		<incomes-filters
			@calendar:opened="disabledPullRefresh = true"
			@calendar:closed="disabledPullRefresh = false"
		/>
		<incomes-summary />
		<incomes-list :is-refresh-loading="isRefreshLoading" />
	</van-pull-refresh>
</template>

<style module lang="scss">
@import './styles/IncomesView.module';
</style>
