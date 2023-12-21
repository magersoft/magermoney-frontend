<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import {
	useInitTransferForm,
	useTransferForm
} from '@/modules/transfers/ui/components/TransferForm/features';
import {
	AppAmountInput,
	AppCellDescription,
	AppCellTitle,
	AppCombobox
} from '@/shared/ui/components';

const { t } = useI18n();
const {
	formRef,
	transferFormData,
	isLoading,
	isLoadingCurrencies,
	isLoadingTransferDetails,
	savedFundsFromItems,
	savedFundsToItems,
	currenciesItems,
	savedFundFromTitle,
	savedFundToTitle,
	showDetails,
	incomeAmount,
	outcomeAmount,
	exchangeRate,
	hasServerError,
	errorMessages,
	handleAmountChange,
	handleSubmit,
	handleConfirmFromPicker,
	handleConfirmToPicker,
	handleSwitchSavedFunds,
	handleTransferDetails
} = useTransferForm();

useInitTransferForm();
</script>

<template>
	<van-form
		ref="formRef"
		:class="$style['transfer-form']"
		@submit="handleSubmit"
	>
		<app-cell-title :text="t('transfers.title')" />
		<app-cell-description :text="t('transfers.description')" />

		<van-cell-group inset :class="$style['transfer-form__group']">
			<app-combobox
				v-model="savedFundFromTitle"
				name="from"
				:placeholder="t('transfers.selectFrom')"
				:disabled="isLoading"
				:items="savedFundsFromItems"
				:error="hasServerError"
				:error-message="errorMessages"
				:rules="[{ required: true, message: t('validation.required') }]"
				:class="$style['transfer-form__field']"
				@confirm="handleConfirmFromPicker"
			/>
			<van-button
				plain
				icon="exchange"
				size="small"
				:class="$style['transfer-form__switch']"
				@click="handleSwitchSavedFunds"
			/>
			<app-combobox
				v-model="savedFundToTitle"
				name="from"
				:placeholder="t('transfers.selectTo')"
				:disabled="isLoading"
				:items="savedFundsToItems"
				:rules="[{ required: true, message: t('validation.required') }]"
				:class="$style['transfer-form__field']"
				@confirm="handleConfirmToPicker"
			/>

			<app-amount-input
				v-model="transferFormData.amount"
				v-model:currency="transferFormData.currency"
				name="amount"
				:label="t('transfers.amount')"
				:placeholder="t('transfers.enterAmount')"
				:currencies="currenciesItems"
				:readonly="isLoading"
				:loading="isLoadingCurrencies"
				:confirm-keyboard-button-text="t('done')"
				:rules="[{ required: true, message: t('validation.required') }]"
				show-currencies
				enable-keyboard
				@update:model-value="handleAmountChange"
				@update:currency="handleTransferDetails"
			/>
		</van-cell-group>

		<template v-if="showDetails">
			<app-cell-title text="Результат" />
			<van-cell-group inset :class="$style['transfer-form__details']">
				<van-cell :title="t('transfers.outcome')">
					<van-skeleton-paragraph
						v-if="isLoadingTransferDetails"
						row-width="50%"
					/>
					<span v-else :class="$style['detail-outcome']">
						{{ outcomeAmount }}
					</span>
				</van-cell>
				<van-cell :title="t('transfers.income')">
					<van-skeleton-paragraph
						v-if="isLoadingTransferDetails"
						row-width="50%"
					/>
					<span v-else :class="$style['detail-income']">
						{{ incomeAmount }}
					</span>
				</van-cell>
				<van-cell :title="t('transfers.rate')">
					<van-skeleton-paragraph
						v-if="isLoadingTransferDetails"
						row-width="50%"
					/>
					<span v-else :class="$style['detail-rate']">
						{{ exchangeRate }}
					</span>
				</van-cell>
			</van-cell-group>
		</template>

		<div :class="$style['transfer-form__actions']">
			<van-button
				round
				block
				type="primary"
				native-type="submit"
				:loading="isLoading"
				:disabled="hasServerError"
			>
				{{ t('transfers.submit') }}
			</van-button>
		</div>
	</van-form>
</template>

<style module lang="scss">
@import './styles/TransferForm.module';
</style>
