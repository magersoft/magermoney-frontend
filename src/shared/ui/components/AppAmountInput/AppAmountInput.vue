<script setup lang="ts">
import { MaskOptions, vMaska } from 'maska';
import { FieldRule, PickerColumn } from 'vant';
import { PickerConfirmEventParams } from 'vant/es/picker/types';
import { Numeric } from 'vant/lib/utils';
import { useI18n } from 'vue-i18n';

interface AppAmountInputProps {
	readonly label?: string;
	readonly name?: string;
	readonly placeholder?: string;
	readonly currency: string;
	readonly modelValue: string;
	readonly currencies?: PickerColumn;
	readonly error?: boolean;
	readonly errorMessage?: string;
	readonly disabled?: boolean;
	readonly loading?: boolean;
	readonly showCurrencies?: boolean;
	readonly rules?: FieldRule[];
}

interface AppAmountInputEvents {
	(event: 'update:modelValue', value: string): void;
	(event: 'update:currency', value: string): void;
	(event: 'add'): void;
}

const props = defineProps<AppAmountInputProps>();
const emit = defineEmits<AppAmountInputEvents>();

const { t } = useI18n();

const showPicker = ref(false);

const internalValue = computed({
	get() {
		return props.modelValue;
	},
	set(value) {
		emit('update:modelValue', value);
	}
});

const internalCurrency = computed({
	get() {
		return props.currency;
	},
	set(value) {
		emit('update:currency', value);
	}
});

const pickerValue = ref([unref(internalCurrency)] as Numeric[]);

const displayCurrencySymbol = computed(
	() =>
		props.currencies?.find((item) => item.value === unref(internalCurrency))
			?.symbol
);

const showKeyboard = ref(false);

const onConfirm = ({ selectedOptions }: PickerConfirmEventParams) => {
	const [options] = selectedOptions;
	internalCurrency.value = options?.value as string;

	emit('update:currency', options?.value as string);

	showPicker.value = false;
};

const onCloseKeyboard = () => {
	emit('add');
};

const amountMask: MaskOptions = reactive({
	mask: '9 99#',
	tokens: {
		'9': {
			pattern: /[0-9]/,
			repeated: true
		}
	},
	reversed: true
});
</script>

<template>
	<div :class="$style['app-amount-input']">
		<van-field
			v-model="internalValue"
			v-maska:[amountMask]
			:label="label"
			:name="name"
			center
			:placeholder="placeholder"
			:error="error"
			:error-message="errorMessage"
			:rules="rules"
			:disabled="disabled"
			@focus="showKeyboard = true"
		>
			<template v-if="showCurrencies" #button>
				<div
					:class="$style['app-amount-input__currency']"
					@click="showPicker = true"
				>
					<span>{{ t('currency') }}</span>
					<van-button
						size="small"
						:loading="loading"
						@click="showPicker = true"
					>
						{{ displayCurrencySymbol }}
					</van-button>
				</div>
			</template>
		</van-field>

		<van-number-keyboard
			v-model="internalValue"
			:show="showKeyboard"
			theme="custom"
			:close-button-text="t('add')"
			@blur="showKeyboard = false"
			@close="onCloseKeyboard"
		/>

		<van-popup
			v-if="showCurrencies"
			v-model:show="showPicker"
			position="bottom"
		>
			<van-picker
				v-model="pickerValue"
				:columns="currencies"
				:loading="loading"
				@confirm="onConfirm"
				@cancel="showPicker = false"
			/>
		</van-popup>
	</div>
</template>

<style module lang="scss">
@import './styles/AppAmountInput.module';
</style>
