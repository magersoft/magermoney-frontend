<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { savedFundsTypes } from '@/modules/savedFunds/constants';
import {
	useInitSavedFundsForm,
	useSavedFundsForm
} from '@/modules/savedFunds/ui/components/SavedFundsForm/features';
import { useWelcomeSteps } from '@/modules/welcome';
import { WelcomeStepsType } from '@/modules/welcome/constants';
import { AppAmountInput, AppCombobox } from '@/shared/ui/components';

interface SavedFundsFormProps {
	continueButton?: boolean;
}

defineProps<SavedFundsFormProps>();

const { t } = useI18n();

const {
	formRef,
	savedFundsFormData,
	hasSavedFunds,
	hasServerError,
	errorMessages,
	currenciesItems,
	isLoading,
	isLoadingCurrencies,
	addSubmitHandler,
	continueHandler
} = useSavedFundsForm();
const { setStep } = useWelcomeSteps();

useInitSavedFundsForm();
</script>

<template>
	<van-form
		ref="formRef"
		:class="$style['saved-funds-form']"
		@submit="addSubmitHandler"
	>
		<h2 class="cell-title">{{ t('welcome.savedFunds.title') }}</h2>
		<p class="cell-description">
			{{ t('welcome.savedFunds.description') }}
		</p>
		<van-cell-group inset>
			<app-combobox
				v-model="savedFundsFormData.source"
				name="source"
				:label="t('welcome.savedFunds.source')"
				:placeholder="t('welcome.savedFunds.selectSaved')"
				:enter-label="t('welcome.savedFunds.name')"
				:enter-placeholder="t('welcome.savedFunds.enterSaved')"
				:custom-title="t('welcome.savedFunds.other')"
				:error="hasServerError"
				:error-message="errorMessages"
				:rules="[{ required: true, message: t('validation.required') }]"
				:disabled="isLoading"
				:items="savedFundsTypes"
			/>
			<app-amount-input
				v-model="savedFundsFormData.amount"
				v-model:currency="savedFundsFormData.currency"
				name="amount"
				:label="t('welcome.savedFunds.amount')"
				:placeholder="t('welcome.savedFunds.enterAmount')"
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

		<van-cell-group inset :class="$style['saved-funds-form__actions']">
			<van-button
				size="small"
				icon="plus"
				:disabled="isLoading"
				native-type="submit"
			>
				{{ t('add') }}
			</van-button>
			<div :class="$style['saved-funds-form__navigations']">
				<van-button
					size="small"
					icon="arrow-left"
					@click="setStep(WelcomeStepsType.INCOME_SOURCES)"
				>
					{{ t('back') }}
				</van-button>
				<van-button
					v-if="continueButton && hasSavedFunds"
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
@import './styles/SavedFundsForm.module';
</style>
