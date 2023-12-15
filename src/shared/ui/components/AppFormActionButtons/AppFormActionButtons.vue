<script setup lang="ts">
import { useI18n } from 'vue-i18n';

interface AppFormActionButtonsProps {
	readonly hasAddButton?: boolean;
	readonly hasBackButton?: boolean;
	readonly hasSubmitButton?: boolean;
	readonly addText?: string;
	readonly backText?: string;
	readonly submitText?: string;
	readonly loading?: boolean;
	readonly disabled?: boolean;
}

interface AppFormActionButtonsEvents {
	(event: 'click:add'): void;
	(event: 'click:submit'): void;
	(event: 'click:back'): void;
}

withDefaults(defineProps<AppFormActionButtonsProps>(), {
	hasSubmitButton: true,
	hasBackButton: false,
	hasAddButton: false,
	addText: '',
	backText: '',
	submitText: ''
});
const emit = defineEmits<AppFormActionButtonsEvents>();

const { t } = useI18n();
</script>

<template>
	<van-cell-group inset :class="$style['app-form-action-buttons']">
		<slot name="prepend" />

		<van-button
			v-if="hasAddButton"
			:disabled="loading || disabled"
			size="small"
			icon="plus"
			@click="() => emit('click:add')"
		>
			{{ addText || t('add') }}
		</van-button>

		<div
			v-if="hasSubmitButton || hasBackButton"
			:class="$style['app-form-action-buttons__actions']"
		>
			<van-button
				v-if="hasBackButton"
				:disabled="loading || disabled"
				size="small"
				icon="arrow-left"
				@click="() => emit('click:back')"
			>
				{{ backText || t('back') }}
			</van-button>
			<van-button
				v-if="hasSubmitButton"
				:disabled="loading || disabled"
				size="small"
				type="primary"
				@click="() => emit('click:submit')"
			>
				{{ submitText || t('save') }}
			</van-button>
		</div>

		<slot name="append" />
	</van-cell-group>
</template>

<style module lang="scss">
@import './styles/AppFormActionButtons.module';
</style>
