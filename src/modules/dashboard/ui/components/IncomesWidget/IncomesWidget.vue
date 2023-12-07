<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useIncomesWidget } from '@/modules/dashboard/ui/components/IncomesWidget/features';

const { t } = useI18n();

const { totalIncomesFormatted, isLoading } = useIncomesWidget();
</script>

<template>
	<div :class="$style['incomes-widget']">
		<div :class="$style['incomes-widget__icon']">
			<van-icon name="down" size="12" />
		</div>
		<div :class="$style['incomes-widget__container']">
			<div :class="$style['incomes-widget__title']">{{ t('incomes') }}</div>
			<div :class="$style['incomes-widget__value']">
				<div :class="$style['incomes-widget__balance']">
					<van-skeleton-paragraph
						v-if="isLoading"
						:style="{ height: '25px' }"
					/>
					<span v-else>+ {{ totalIncomesFormatted }}</span>
				</div>
				<div :class="$style['incomes-widget__arrow']">
					<van-icon name="arrow" />
				</div>
			</div>
		</div>
	</div>
</template>

<style module lang="scss">
@import './styles/IncomesWidget.module';
</style>
