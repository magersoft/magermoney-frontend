<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useCurrencyFormat } from '@/modules/currencies';
import { NSavedFunds } from '@/modules/savedFunds/domain';
import ISavedFund = NSavedFunds.ISavedFund;
import { classNames } from '@/shared/utils';

interface WalletItemProps {
	readonly item: ISavedFund;
	readonly sortable?: boolean;
}

defineProps<WalletItemProps>();

const { t, locale } = useI18n();
const { formatAmountWithCurrency } = useCurrencyFormat();
</script>

<template>
	<div
		:class="
			classNames($style['wallet-item'], {
				[$style['wallet-item--sortable']]: sortable
			})
		"
	>
		<div :class="$style['wallet-item__header']">{{ item.source }}</div>
		<div :class="$style['wallet-item__body']">
			<div :class="$style['wallet-item__title']">{{ t('currentBalance') }}</div>
			<div :class="$style['wallet-item__balance']">
				{{ formatAmountWithCurrency(item.amount, item.currency.code) }}
			</div>
		</div>
		<div :class="$style['wallet-item__footer']">
			{{ new Date(item.createdAt).toLocaleDateString(locale) }}
		</div>
	</div>
</template>

<style module lang="scss">
@import './styles/WalletItem.module';
</style>
