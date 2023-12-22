<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { CurrenciesSelector } from '@/modules/currencies/ui/components';
import { useWelcomeCurrenciesStep } from '@/modules/welcome/ui/components/WelcomeCurrenciesStep/features';

const { t } = useI18n();
const { enableContinue, handleContinue } = useWelcomeCurrenciesStep();
</script>

<template>
	<div :class="$style['welcome-currencies-step']">
		<currencies-selector />

		<div :class="$style['welcome-currencies-step__actions']">
			<van-button
				block
				type="primary"
				:disabled="!enableContinue"
				@click="handleContinue"
			>
				{{ t('continue') }}
			</van-button>
		</div>
	</div>
</template>

<style module lang="scss">
@import './styles/WelcomeCurrenciesStep.module';
</style>
