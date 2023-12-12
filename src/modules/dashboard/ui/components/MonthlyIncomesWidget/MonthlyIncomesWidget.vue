<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useMonthlyIncomesWidget } from '@/modules/dashboard/ui/components/MonthlyIncomesWidget/features';

const { t } = useI18n();

const { totalMonthlyIncomesFormatted, isLoading } = useMonthlyIncomesWidget();
</script>

<template>
	<div :class="$style['monthly-incomes-widget']">
		<div :class="$style['monthly-incomes-widget__icon']">
			<van-icon name="down" size="12" />
		</div>
		<div :class="$style['monthly-incomes-widget__container']">
			<div :class="$style['monthly-incomes-widget__title']">
				{{ t('incomes') }}
			</div>
			<div :class="$style['monthly-incomes-widget__value']">
				<div :class="$style['monthly-incomes-widget__balance']">
					<van-skeleton-paragraph
						v-if="isLoading"
						:style="{ height: '25px' }"
					/>
					<span v-else>+ {{ totalMonthlyIncomesFormatted }}</span>
				</div>
				<div :class="$style['monthly-incomes-widget__arrow']">
					<van-icon name="arrow" />
				</div>
			</div>
		</div>
	</div>
</template>

<style module lang="scss">
@import './styles/MonthlyIncomesWidget.module';
</style>
