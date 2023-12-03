<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import {
	useAccumulationFundsForm,
	useInitAccumulationFundsForm
} from '@/modules/accumulationFunds/ui/components/AccumulationFundsForm/features';
import { AppAmountInput, AppFormActionButtons } from '@/shared/ui/components';
import { AppFormEvents, AppFormProps } from '@/shared/ui/composables';

interface AccumulationFundsFormProps extends AppFormProps {}
interface AccumulationFundsFormEvents extends AppFormEvents {
	(event: 'click:add'): void;
	(event: 'click:submit'): void;
	(event: 'click:back'): void;
}

defineProps<AccumulationFundsFormProps>();
const emit = defineEmits<AccumulationFundsFormEvents>();

useInitAccumulationFundsForm();

const { t } = useI18n();

const {
	formRef,
	accumulationFundsFormData,
	currenciesItems,
	isLoading,
	isLoadingCurrencies,
	isLoadingCalculations,
	hasServerError,
	hasAccumulationFunds,
	handlePercentChange,
	handleAmountChange,
	handleCurrencyChange,
	handleBack,
	handleSubmit,
	handleRemove
} = useAccumulationFundsForm({
	onAdd: () => emit('click:add'),
	onSubmit: () => emit('click:submit'),
	onBack: () => emit('click:back')
});
</script>

<template>
	<van-form
		ref="formRef"
		:class="$style['accumulation-funds-form']"
		@submit="handleSubmit"
	>
		<h2 class="cell-title">{{ t('accumulationFunds.title') }}</h2>
		<p class="cell-description">
			{{ t('accumulationFunds.description') }}
		</p>
		<van-cell-group inset>
			<app-amount-input
				v-model="accumulationFundsFormData.percent"
				name="percent"
				:label="t('accumulationFunds.percent')"
				:placeholder="t('accumulationFunds.percentPlaceholder')"
				:error="hasServerError"
				:readonly="isLoading || isLoadingCalculations"
				:loading="isLoadingCurrencies"
				:disabled="hasAccumulationFunds"
				:confirm-keyboard-button-text="t('done')"
				:rules="[{ required: true, message: t('validation.required') }]"
				enable-keyboard
				is-percent
				@update:model-value="handlePercentChange"
			>
				<template #append>
					<van-loading v-if="isLoadingCalculations" size="24" />
					<span v-else>%</span>
				</template>
			</app-amount-input>
			<app-amount-input
				v-model="accumulationFundsFormData.amount"
				v-model:currency="accumulationFundsFormData.currency"
				name="amount"
				:label="t('accumulationFunds.amount')"
				:placeholder="t('accumulationFunds.amountPlaceholder')"
				:currencies="currenciesItems"
				:error="hasServerError"
				:readonly="isLoading || isLoadingCalculations"
				:disabled="hasAccumulationFunds"
				:loading="isLoading || isLoadingCurrencies"
				:confirm-keyboard-button-text="t('done')"
				:rules="[{ required: true, message: t('validation.required') }]"
				enable-keyboard
				show-currencies
				@update:model-value="handleAmountChange"
				@update:currency="handleCurrencyChange"
			/>
		</van-cell-group>

		<app-form-action-buttons
			v-if="!hideFormActionButtons"
			:has-add-button="hasAddButton"
			:has-submit-button="hasSubmitButton"
			:has-back-button="hasBackButton"
			:submit-text="hasAccumulationFunds ? t('continue') : t('add')"
			:loading="isLoading"
			@click:back="handleBack"
			@click:submit="handleSubmit"
		>
			<template v-if="hasAccumulationFunds" #prepend>
				<van-button
					type="danger"
					size="small"
					:disabled="isLoadingCalculations"
					@click="handleRemove"
				>
					{{ t('delete') }}
				</van-button>
			</template>
		</app-form-action-buttons>

		<slot />
	</van-form>
</template>

<style module lang="scss">
@import './styles/AccumulationFundsForm.module';
</style>
