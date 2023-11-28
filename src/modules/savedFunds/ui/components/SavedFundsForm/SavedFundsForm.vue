<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { savedFundsTypes } from '@/modules/savedFunds/constants';
import {
	useInitSavedFundsForm,
	useSavedFundsForm
} from '@/modules/savedFunds/ui/components/SavedFundsForm/features';
import {
	AppAmountInput,
	AppCombobox,
	AppFormNavigation
} from '@/shared/ui/components';

interface SavedFundsFormProps {
	readonly hasSubmitButton?: boolean;
	readonly hasBackButton?: boolean;
	readonly hasAddButton?: boolean;
	readonly hideFormNavigation?: boolean;
}

interface SavedFundsFormEvents {
	(event: 'click:add'): void;
	(event: 'click:submit'): void;
	(event: 'click:back'): void;
}

defineProps<SavedFundsFormProps>();
const emit = defineEmits<SavedFundsFormEvents>();

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
	submitHandler,
	backHandler
} = useSavedFundsForm({
	onAdd: () => emit('click:add'),
	onSubmit: () => emit('click:submit'),
	onBack: () => emit('click:back')
});

useInitSavedFundsForm();
</script>

<template>
	<van-form
		ref="formRef"
		:class="$style['saved-funds-form']"
		@submit="submitHandler"
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

		<app-form-navigation
			v-if="!hideFormNavigation"
			:has-add-button="hasAddButton"
			:has-back-button="hasBackButton"
			:has-submit-button="hasSubmitButton && hasSavedFunds"
			:submit-text="t('continue')"
			:is-loading="isLoading"
			@click:add="addSubmitHandler"
			@click:submit="submitHandler"
			@click:back="backHandler"
		/>

		<slot />
	</van-form>
</template>

<style module lang="scss">
@import './styles/SavedFundsForm.module';
</style>
