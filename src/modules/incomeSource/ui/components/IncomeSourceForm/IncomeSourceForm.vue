<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import {
	useIncomeSourceForm,
	useInitIncomeSourcesForm
} from '@/modules/incomeSource/ui/components/IncomeSourceForm/features';
import { AppAmountInput, AppCombobox } from '@/shared/ui/components';

interface IncomeSourceFormProps {
	continueButton?: boolean;
}

defineProps<IncomeSourceFormProps>();

const { t } = useI18n();
const {
	formRef,
	incomeSourceFormData,
	hasServerError,
	errorMessages,
	hasIncomeSources,
	currenciesItems,
	isLoading,
	isLoadingCurrencies,
	addSubmitHandler,
	continueHandler
} = useIncomeSourceForm();

// @todo move to useIncomeSourceForm and get from backend
const incomeTypes = ref([
	{
		text: 'Зарплата',
		value: 'salary'
	},
	{
		text: 'Подработка',
		value: 'sideJob'
	},
	{
		text: 'Стипендия',
		value: 'scholarship'
	},
	{
		text: 'Доход от сдачи в аренду',
		value: 'rentalIncome'
	},
	{
		text: 'Доход от вклада',
		value: 'depositIncome'
	},
	{
		text: 'Инвестиции',
		value: 'investments'
	},
	{
		text: 'Пенсия',
		value: 'pension'
	},
	{
		text: 'Другое',
		value: 'other'
	}
]);

useInitIncomeSourcesForm();
</script>

<template>
	<van-form
		ref="formRef"
		:class="$style['income-source-form']"
		@submit="addSubmitHandler"
	>
		<h2 class="cell-title">{{ t('welcome.incomeSource.title') }}</h2>
		<p class="cell-description">
			{{ t('welcome.incomeSource.description') }}
		</p>
		<van-cell-group inset>
			<app-combobox
				v-model="incomeSourceFormData.title"
				name="title"
				:label="t('welcome.incomeSource.source')"
				:placeholder="t('welcome.incomeSource.selectIncome')"
				:enter-label="t('welcome.incomeSource.name')"
				:enter-placeholder="t('welcome.incomeSource.enterIncome')"
				:custom-title="t('welcome.incomeSource.other')"
				:error="hasServerError"
				:error-message="errorMessages"
				:rules="[{ required: true, message: t('validation.required') }]"
				:disabled="isLoading"
				:items="incomeTypes"
			/>
			<app-amount-input
				v-model="incomeSourceFormData.amount"
				v-model:currency="incomeSourceFormData.currency"
				name="amount"
				:label="t('welcome.incomeSource.amount')"
				:placeholder="t('welcome.incomeSource.enterAmount')"
				:currencies="currenciesItems"
				:error="hasServerError"
				:error-message="errorMessages"
				:rules="[{ required: true, message: t('validation.required') }]"
				:disabled="isLoading"
				:loading="isLoadingCurrencies"
				show-currencies
				@add="addSubmitHandler"
			/>
		</van-cell-group>

		<van-cell-group inset :class="$style['income-source-form__actions']">
			<van-button size="small" :disabled="isLoading" native-type="submit">
				{{ t('add') }}
			</van-button>
			<van-button
				v-if="continueButton && hasIncomeSources"
				size="small"
				:disabled="isLoading"
				type="primary"
				@click="continueHandler"
			>
				{{ t('continue') }}
			</van-button>
		</van-cell-group>
	</van-form>
</template>

<style module lang="scss">
@import './styles/IncomeSourceForm.module';
</style>
