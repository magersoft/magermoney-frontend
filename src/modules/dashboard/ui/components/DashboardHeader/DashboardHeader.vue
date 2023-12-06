<script setup lang="ts">
import { CurrenciesButton, CurrenciesPicker } from '@/modules/currencies';
import { useInitDashboard } from '@/modules/dashboard/features';

const { fetchDashboard } = useInitDashboard();
</script>

<template>
	<header :class="$style['dashboard-header']">
		<div :class="$style['dashboard-header__panel']">
			<van-image round width="3rem" height="3rem" />

			<div>Magermoney</div>

			<currencies-picker @confirm="fetchDashboard">
				<template #activator="{ isLoading, onShowPicker }">
					<currencies-button :loading="isLoading" @click="onShowPicker" />
				</template>
			</currencies-picker>
		</div>
	</header>
</template>

<style module lang="scss">
@import './styles/DashboardHeader.module';
</style>
