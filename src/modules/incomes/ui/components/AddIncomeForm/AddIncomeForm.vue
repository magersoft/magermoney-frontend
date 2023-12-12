<script setup lang="ts">
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

const {
	incomeFormData,
	incomeSourcesItems,
	showedPicker,
	isSingleIncome,
	handleShowPicker,
	handleConfirmPicker,
	getCurrencySymbol
} = useAddIncomeForm();
</script>

<template>
	<van-form :class="$style['add-income-form']">
		<app-cell-title text="Заявить о доходе" />
		<app-cell-description
			text="Вы можете заявить о доходе из ваших ежемесячных источников дохода или заявить о разовом доходе"
		/>

		<van-cell-group inset>
			<app-amount-input
				v-model="incomeFormData.amount"
				name="amount"
				readonly
				:disabled="isSingleIncome"
				label="Доход"
				placeholder="Выберите доход"
				:class="$style['add-income-form__field']"
				@click="handleShowPicker"
			>
				<template v-if="incomeFormData.amount" #append>
					{{ getCurrencySymbol(incomeFormData.currency) }}
				</template>
			</app-amount-input>
			<van-cell
				center
				title="Разовый доход"
				:class="$style['add-income-form__field']"
			>
				<template #right-icon>
					<van-switch v-model="isSingleIncome" />
				</template>
			</van-cell>
		</van-cell-group>

		<template v-if="isSingleIncome">
			<app-cell-title text="Разовый доход" />
			<app-cell-description text="Выберите категорию дохода и введите сумму" />

			<van-cell-group inset>
				<app-combobox
					v-model="incomeFormData.title"
					name="title"
					:class="$style['add-income-form__field']"
				/>
			</van-cell-group>
		</template>

		<div :class="$style['add-income-form__actions']">
			<van-button round block type="primary" native-type="submit">
				Заявить
			</van-button>
		</div>
	</van-form>

	<van-popup v-model:show="showedPicker" position="bottom">
		<van-picker
			:columns="incomeSourcesItems"
			@confirm="handleConfirmPicker"
			@cancel="showedPicker = false"
		/>
	</van-popup>
</template>

<style module lang="scss">
@import './styles/AddIncomeForm.module';
</style>
