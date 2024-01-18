<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { appConfig } from '@/app/config';
import {
	useAddIncomeForm,
	useInitAddIncomeForm
} from '@/modules/incomes/ui/components/AddIncomeForm/features';
import {
	AppAmountInput,
	AppCellDescription,
	AppCellTitle,
	AppCombobox
} from '@/shared/ui/components';

useInitAddIncomeForm();

const { t } = useI18n();

const {
	formRef,
	incomeFormData,
	incomeSourcesItems,
	savedFundsItems,
	currenciesItems,
	categoriesItems,
	showedIncomeSourcesPicker,
	showedDatePicker,
	savedFundTitle,
	isSingleIncome,
	isLoading,
	isLoadingCurrencies,
	isLoadingCategories,
	formattedDate,
	handleSubmit,
	handleShowDatePicker,
	handleShowIncomeSourcesPicker,
	handleUpdateCategoriesTitle,
	handleConfirmCategoriesPicker,
	handleConfirmIncomeSourcesPicker,
	handleConfirmSavedFundsPicker,
	handleConfirmDatePicker,
	getCurrencySymbol
} = useAddIncomeForm();
</script>

<template>
	<van-form
		ref="formRef"
		:class="$style['add-income-form']"
		@submit="handleSubmit"
	>
		<app-cell-title :text="t('addIncomeForm.title')" />
		<app-cell-description :text="t('addIncomeForm.description')" />

		<van-cell-group inset>
			<app-amount-input
				v-if="!isSingleIncome"
				v-model="incomeFormData.amount"
				name="amount"
				readonly
				:loading="isLoading"
				:disabled="isLoading"
				:label="t('addIncomeForm.income')"
				:placeholder="t('addIncomeForm.selectIncome')"
				:rules="[{ required: true, message: t('validation.required') }]"
				:class="$style['add-income-form__field']"
				@click="handleShowIncomeSourcesPicker"
			>
				<template v-if="incomeFormData.amount" #append>
					{{ getCurrencySymbol(incomeFormData.currency) }}
				</template>
			</app-amount-input>

			<app-combobox
				v-if="isSingleIncome"
				v-model="incomeFormData.title"
				name="title"
				:label="t('addIncomeForm.category')"
				:placeholder="t('addIncomeForm.selectCategory')"
				:enter-label="t('addIncomeForm.name')"
				:enter-placeholder="t('addIncomeForm.enterIncome')"
				:custom-title="t('Other')"
				:disabled="isLoading || isLoadingCategories"
				:loading="isLoadingCategories"
				:rules="[{ required: true, message: t('validation.required') }]"
				:items="categoriesItems"
				:class="$style['add-income-form__field']"
				@confirm="handleConfirmCategoriesPicker"
				@update:model-value="handleUpdateCategoriesTitle"
			/>

			<app-amount-input
				v-if="isSingleIncome"
				v-model="incomeFormData.amount"
				v-model:currency="incomeFormData.currency"
				name="amount"
				:label="t('addIncomeForm.amount')"
				:placeholder="t('addIncomeForm.enterAmount')"
				:currencies="currenciesItems"
				:readonly="isLoading"
				:loading="isLoadingCurrencies"
				:rules="[{ required: true, message: t('validation.required') }]"
				show-currencies
				enable-keyboard
				:class="[
					$style['add-income-form__field'],
					$style['add-income-form__field--currencies']
				]"
			/>

			<app-combobox
				v-model="savedFundTitle"
				name="savedFundId"
				:label="t('addIncomeForm.savedFund')"
				:placeholder="t('addIncomeForm.selectSavedFund')"
				:disabled="isLoading"
				:items="savedFundsItems"
				:rules="[{ required: true, message: t('validation.required') }]"
				:class="$style['add-income-form__field']"
				@confirm="handleConfirmSavedFundsPicker"
			/>

			<van-cell
				:title="t('addIncomeForm.dateOfIssue')"
				:value="formattedDate"
				:class="$style['add-income-form__field']"
				@click="handleShowDatePicker"
			/>

			<van-cell
				center
				:title="t('addIncomeForm.singleIncome')"
				:class="$style['add-income-form__field']"
			>
				<template #right-icon>
					<van-switch v-model="isSingleIncome" :loading="isLoading" />
				</template>
			</van-cell>
		</van-cell-group>

		<div :class="$style['add-income-form__actions']">
			<van-button
				round
				block
				type="primary"
				native-type="submit"
				:loading="isLoading"
			>
				{{ t('addIncomeForm.declare') }}
			</van-button>
		</div>
	</van-form>

	<van-popup v-model:show="showedIncomeSourcesPicker" position="bottom">
		<van-picker
			:columns="incomeSourcesItems"
			@confirm="handleConfirmIncomeSourcesPicker"
			@cancel="showedIncomeSourcesPicker = false"
		/>
	</van-popup>

	<van-calendar
		v-model:show="showedDatePicker"
		:min-date="appConfig.minDate"
		:max-date="appConfig.maxDate"
		@confirm="handleConfirmDatePicker"
	/>
</template>

<style module lang="scss">
@import './styles/AddIncomeForm.module';
</style>
