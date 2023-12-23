<script setup lang="ts">
import { useExchangeRatesWidget } from '@/modules/dashboard/ui/components/ExchangeRatesWidget/features';
import { AppCellSkeleton } from '@/shared/ui/components';

const { currenciesRatesItems, isLoading } = useExchangeRatesWidget();
</script>

<template>
	<van-cell-group inset :class="$style['exchange-rates-widget']">
		<h2 :class="$style['exchange-rates-widget__title']">Курсы валют</h2>
		<div :class="$style['exchange-rates-widget__container']">
			<app-cell-skeleton
				v-if="isLoading"
				row="4"
				:class="$style['exchange-rates-widget__item']"
			/>
			<van-cell
				v-for="(currencyRateItem, idx) in currenciesRatesItems"
				v-else
				:key="idx + currencyRateItem.title"
				:title="currencyRateItem.title"
				:value="currencyRateItem.rate"
				:class="$style['exchange-rates-widget__item']"
			/>
		</div>
	</van-cell-group>
</template>

<style module lang="scss">
@import './styles/ExchangeRatesWidget.module';
</style>
