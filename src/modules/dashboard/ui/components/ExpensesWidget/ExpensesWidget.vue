<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useExpensesWidget } from '@/modules/dashboard/ui/components/ExpensesWidget/features';

const { t } = useI18n();

const { totalExpensesFormatted, isLoading } = useExpensesWidget();
</script>

<template>
	<div :class="$style['expenses-widget']">
		<div :class="$style['expenses-widget__icon']">
			<van-icon name="down" size="12" />
		</div>
		<div :class="$style['expenses-widget__container']">
			<div :class="$style['expenses-widget__title']">{{ t('expenses') }}</div>
			<div :class="$style['expenses-widget__value']">
				<div :class="$style['expenses-widget__balance']">
					<van-skeleton-paragraph
						v-if="isLoading"
						:style="{ height: '25px' }"
					/>
					<span v-else>- {{ totalExpensesFormatted }}</span>
				</div>
				<div :class="$style['expenses-widget__arrow']">
					<van-icon name="arrow" />
				</div>
			</div>
		</div>
	</div>
</template>

<style module lang="scss">
@import './styles/ExpensesWidget.module';
</style>
