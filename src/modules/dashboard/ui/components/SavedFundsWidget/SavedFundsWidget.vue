<script setup lang="ts">
import { useSavedFundsWidget } from '@/modules/dashboard/ui/components/SavedFundsWidget/features';

const { onlyThreeFunds } = useSavedFundsWidget();

// [
//   { id: 1, title: 'Наличные', color: '#191919' },
//   { id: 2, title: 'Ledger', color: '#4934B1' },
//   {
//     id: 3,
//     title: 'Капитал Банк',
//     color: '#98750C'
//   }
//   // { id: 4, title: 'Wise', color: '#106800' }
//   // { id: 5, title: 'Альфа Банк', color: '#B13434' }
// ]
</script>

<template>
	<van-skeleton :loading="false">
		<van-cell-group inset :class="$style['saved-funds-widget']">
			<div
				v-for="fund in onlyThreeFunds"
				:key="fund.id"
				:class="$style['saved-funds-widget__item']"
			>
				<div :class="$style['saved-funds-widget__title']">
					{{ fund.source }}
				</div>
				<div :class="$style['saved-funds-widget__value']">
					{{ fund.amount }}
				</div>
			</div>
			<div :class="$style['saved-funds-widget__item']">
				<van-icon name="plus" />
			</div>
		</van-cell-group>

		<template #template>
			<van-skeleton-paragraph :style="{ height: '3rem' }" />
		</template>
	</van-skeleton>
</template>

<style module lang="scss">
@import './styles/SavedFundsWidget.module';
</style>
