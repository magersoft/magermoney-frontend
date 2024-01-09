<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import { AppRoutes } from '@/app/router/constants';
import { useMonthlyBudget } from '@/modules/monthlyBudget/features';
import { MonthlyBudgetSummary } from '@/modules/monthlyBudget/ui/components';
import { useAppHeader } from '@/shared/ui/components';

const { t } = useI18n();
const { setHeader } = useAppHeader();
const router = useRouter();

const { isRefreshLoading, handleRefresh } = useMonthlyBudget();

setHeader({
	isLeftArrow: true,
	textLeft: t('back'),
	onClickLeft: () => {
		router.push({ name: AppRoutes.Dashboard });
	}
});
</script>

<template>
	<van-pull-refresh
		:model-value="isRefreshLoading"
		:class="$style['monthly-budget-view']"
		@refresh="handleRefresh"
	>
		<monthly-budget-summary />
	</van-pull-refresh>
</template>

<style module lang="scss">
@import './styles/MonthlyBudgetView.module';
</style>
