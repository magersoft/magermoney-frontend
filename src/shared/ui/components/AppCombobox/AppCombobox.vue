<script setup lang="ts">
import { FieldRule, PickerColumn } from 'vant';
import { PickerConfirmEventParams } from 'vant/es/picker/types';

interface AppComboboxProps {
	readonly label?: string;
	readonly enterLabel?: string;
	readonly placeholder?: string;
	readonly enterPlaceholder?: string;
	readonly name?: string;
	readonly customTitle?: string;
	readonly error?: boolean;
	readonly errorMessage?: string;
	readonly modelValue: string;
	readonly items?: PickerColumn;
	readonly rules?: FieldRule[];
	readonly disabled?: boolean;
}

interface AppComboboxEvents {
	(event: 'confirm', value: boolean): void;
	(event: 'update:modelValue', value: string): void;
}

const props = defineProps<AppComboboxProps>();
const emit = defineEmits<AppComboboxEvents>();

const showPicker = ref(false);
const customInternalValue = ref('');

const isCustom = computed(() => props.modelValue === props.customTitle);
const internalValue = computed({
	get() {
		return props.modelValue;
	},
	set(value) {
		emit('update:modelValue', value);
		customInternalValue.value = '';
	}
});

const onConfirm = ({ selectedOptions }: PickerConfirmEventParams) => {
	const [options] = selectedOptions;
	internalValue.value = options?.text as string;

	emit('confirm', unref(showPicker));

	showPicker.value = false;
};

const onChangeCustomValue = () => {
	if (unref(isCustom)) {
		internalValue.value = unref(customInternalValue);
	}
};
</script>

<template>
	<div :class="$style['app-combobox']">
		<van-field
			v-model="internalValue"
			is-link
			readonly
			:name="name"
			:label="label"
			:placeholder="placeholder"
			:error="error"
			:error-message="errorMessage"
			:rules="!isCustom ? rules : []"
			:disabled="disabled"
			@click="showPicker = true"
		/>
		<van-field
			v-if="isCustom"
			v-model="customInternalValue"
			:name="name"
			:label="enterLabel"
			:placeholder="enterPlaceholder"
			:disabled="disabled"
			:rules="rules"
			@blur="onChangeCustomValue"
		/>

		<van-popup v-model:show="showPicker" position="bottom">
			<van-picker
				:columns="items"
				@confirm="onConfirm"
				@cancel="showPicker = false"
			/>
		</van-popup>
	</div>
</template>

<style module lang="scss">
@import './styles/AppCombobox.module';
</style>
