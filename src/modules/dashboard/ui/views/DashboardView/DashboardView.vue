<script setup lang="ts">
import {
	DashboardHeader,
	TotalBalanceWidget
} from '@/modules/dashboard/ui/components';
import { useInitDashboardView } from '@/modules/dashboard/ui/views/DashboardView/features';
import { useAppHeader } from '@/shared/ui/components';

const { setHeader } = useAppHeader();

setHeader({
	isHidden: true
});

useInitDashboardView();
</script>

<template>
	<div :class="$style['dashboard-view']">
		<dashboard-header />
		<total-balance-widget />
	</div>
</template>

<style module lang="scss">
@import './styles/DashboardView.module';
</style>
