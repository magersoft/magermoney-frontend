<script setup lang="ts">
import { useCurrenciesButton } from '@/modules/currencies/ui/components/CurrenciesButton/features';

interface CurrenciesButtonProps {
	loading?: boolean;
}

defineProps<CurrenciesButtonProps>();

const { currency, symbol } = useCurrenciesButton();
</script>

<template>
	<van-button
		round
		:title="currency"
		:loading="loading"
		:class="$style['currencies-button']"
	>
		{{ symbol }}
	</van-button>
</template>

<style module lang="scss">
@import './styles/CurrenciesButton.module';
</style>
