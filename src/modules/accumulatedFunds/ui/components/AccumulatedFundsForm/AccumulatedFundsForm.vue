<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useWelcomeSteps } from '@/modules/welcome';
import { WelcomeStepsType } from '@/modules/welcome/constants';

interface AccumulatedFundsFormProps {
	continueButton?: boolean;
}

defineProps<AccumulatedFundsFormProps>();

const { t } = useI18n();

const { setStep } = useWelcomeSteps();
</script>

<template>
	<van-form :class="$style['accumulated-funds-form']">
		<h2 class="cell-title">{{ t('welcome.accumulatedFunds.title') }}</h2>
		<p class="cell-description">
			{{ t('welcome.accumulatedFunds.description') }}
		</p>
		<van-cell-group inset></van-cell-group>

		<van-cell-group inset :class="$style['accumulated-funds-form__actions']">
			<van-button size="small" icon="plus" native-type="submit">
				{{ t('add') }}
			</van-button>
			<div :class="$style['accumulated-funds-form__navigations']">
				<van-button
					size="small"
					icon="arrow-left"
					@click="setStep(WelcomeStepsType.INCOME_SOURCES)"
				>
					{{ t('back') }}
				</van-button>
				<van-button v-if="continueButton" size="small" type="primary">
					{{ t('continue') }}
				</van-button>
			</div>
		</van-cell-group>
	</van-form>
</template>

<style module lang="scss">
@import './styles/AccumulatedFundsForm.module';
</style>
