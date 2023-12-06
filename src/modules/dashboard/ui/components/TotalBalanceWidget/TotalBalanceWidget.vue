<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useTotalBalanceWidget } from '@/modules/dashboard/ui/components/TotalBalanceWidget/features';

const { t } = useI18n();

const { totalBalanceFormatted, isLoading } = useTotalBalanceWidget();
</script>

<template>
	<van-skeleton :loading="isLoading">
		<van-cell-group inset :class="$style['total-balance-widget']">
			<h2 :class="$style['total-balance-widget__title']">
				{{ t('totalBalance') }}
			</h2>
			<div :class="$style['total-balance-widget__container']">
				<div :class="$style['total-balance-widget__balance']">
					{{ totalBalanceFormatted }}
				</div>
				<div :class="$style['total-balance-widget__view-all']">
					{{ t('viewAll') }}
				</div>
			</div>
		</van-cell-group>

		<template #template>
			<div :style="{ display: 'flex', width: '100%' }">
				<div :style="{ flex: 1 }">
					<van-skeleton-paragraph row-width="40%" />
					<van-skeleton-paragraph :style="{ height: '42.5px' }" />
				</div>
			</div>
		</template>
	</van-skeleton>
</template>

<style module lang="scss">
@import './styles/TotalBalanceWidget.module';
</style>
