<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import {
	useCurrenciesSelector,
	useInitCurrenciesSelector
} from '@/modules/currencies/ui/components/CurrenciesSelector/features';
import {
	AppCellDescription,
	AppCellSkeleton,
	AppCellTitle
} from '@/shared/ui/components';

const { t } = useI18n();

const {
	currenciesListItems,
	checkedCurrencies,
	checkboxRefs,
	isLoading,
	handleChecked
} = useCurrenciesSelector();

useInitCurrenciesSelector();
</script>

<template>
	<div :class="$style['currencies-selector']">
		<app-cell-title :text="t('currenciesView.title')" />
		<app-cell-description :text="t('currenciesView.description')" />

		<van-checkbox-group v-model="checkedCurrencies">
			<van-cell-group inset>
				<app-cell-skeleton
					v-if="!currenciesListItems.length && isLoading"
					row="10"
				/>
				<van-cell
					v-for="(currency, index) in currenciesListItems"
					:key="currency.id"
					clickable
					:title="`${currency.symbol} - ${currency.text}`"
					@click="handleChecked(index)"
				>
					<template #right-icon>
						<van-checkbox
							:ref="(el) => (checkboxRefs[index] = el)"
							:name="currency.id"
							@click.stop
						/>
					</template>
				</van-cell>
			</van-cell-group>
		</van-checkbox-group>
	</div>
</template>

<style module lang="scss">
@import './styles/CurrenciesSelector.module';
</style>
