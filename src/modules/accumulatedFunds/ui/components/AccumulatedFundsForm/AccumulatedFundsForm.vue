<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { accumulatedFundsTypes } from '@/modules/accumulatedFunds/constants';
import {
	useAccumulatedFundsForm,
	useInitAccumulatedFundsForm
} from '@/modules/accumulatedFunds/ui/components/AccumulatedFundsForm/features';
import { useWelcomeSteps } from '@/modules/welcome';
import { WelcomeStepsType } from '@/modules/welcome/constants';
import { AppAmountInput, AppCombobox } from '@/shared/ui/components';

interface AccumulatedFundsFormProps {
	continueButton?: boolean;
}

defineProps<AccumulatedFundsFormProps>();

const { t } = useI18n();

const {
	formRef,
	accumulatedFundsFormData,
	hasAccumulatedFunds,
	hasServerError,
	errorMessages,
	currenciesItems,
	isLoading,
	isLoadingCurrencies,
	addSubmitHandler,
	continueHandler
} = useAccumulatedFundsForm();
const { setStep } = useWelcomeSteps();

useInitAccumulatedFundsForm();
</script>

<template>
	<van-form
		ref="formRef"
		:class="$style['accumulated-funds-form']"
		@submit="addSubmitHandler"
	>
		<h2 class="cell-title">{{ t('welcome.accumulatedFunds.title') }}</h2>
		<p class="cell-description">
			{{ t('welcome.accumulatedFunds.description') }}
		</p>
		<van-cell-group inset>
			<app-combobox
				v-model="accumulatedFundsFormData.source"
				name="source"
				:label="t('welcome.accumulatedFunds.source')"
				:placeholder="t('welcome.accumulatedFunds.selectAccumulated')"
				:enter-label="t('welcome.accumulatedFunds.name')"
				:enter-placeholder="t('welcome.accumulatedFunds.enterAccumulated')"
				:custom-title="t('welcome.accumulatedFunds.other')"
				:error="hasServerError"
				:error-message="errorMessages"
				:rules="[{ required: true, message: t('validation.required') }]"
				:disabled="isLoading"
				:items="accumulatedFundsTypes"
			/>
			<app-amount-input
				v-model="accumulatedFundsFormData.amount"
				v-model:currency="accumulatedFundsFormData.currency"
				name="amount"
				:label="t('welcome.accumulatedFunds.amount')"
				:placeholder="t('welcome.accumulatedFunds.enterAmount')"
				:currencies="currenciesItems"
				:error="hasServerError"
				:error-message="errorMessages"
				:rules="[{ required: true, message: t('validation.required') }]"
				:disabled="isLoading"
				:loading="isLoadingCurrencies"
				show-currencies
				enable-keyboard
				@add="addSubmitHandler"
			/>
		</van-cell-group>

		<van-cell-group inset :class="$style['accumulated-funds-form__actions']">
			<van-button
				size="small"
				icon="plus"
				:disabled="isLoading"
				native-type="submit"
			>
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
				<van-button
					v-if="continueButton && hasAccumulatedFunds"
					:disabled="isLoading"
					size="small"
					type="primary"
					@click="continueHandler"
				>
					{{ t('continue') }}
				</van-button>
			</div>
		</van-cell-group>
	</van-form>
</template>

<style module lang="scss">
@import './styles/AccumulatedFundsForm.module';
</style>
