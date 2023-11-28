<script setup lang="ts">
import { useI18n } from 'vue-i18n';

interface AppFormNavigationProps {
	readonly hasAddButton?: boolean;
	readonly hasBackButton?: boolean;
	readonly hasSubmitButton?: boolean;
	readonly addText?: string;
	readonly backText?: string;
	readonly submitText?: string;
	readonly isLoading?: boolean;
}

interface AppFormNavigationEvents {
	(event: 'click:add'): void;
	(event: 'click:submit'): void;
	(event: 'click:back'): void;
}

withDefaults(defineProps<AppFormNavigationProps>(), {
	hasSubmitButton: true,
	hasBackButton: false,
	hasAddButton: false,
	addText: '',
	backText: '',
	submitText: ''
});
const emit = defineEmits<AppFormNavigationEvents>();

const { t } = useI18n();
</script>

<template>
	<van-cell-group inset :class="$style['app-form-navigation']">
		<van-button
			v-if="hasAddButton"
			:disabled="isLoading"
			size="small"
			icon="plus"
			@click="() => emit('click:add')"
		>
			{{ addText || t('add') }}
		</van-button>
		<div :class="$style['app-form-navigation__actions']">
			<van-button
				v-if="hasBackButton"
				:disabled="isLoading"
				size="small"
				icon="arrow-left"
				@click="() => emit('click:back')"
			>
				{{ backText || t('back') }}
			</van-button>
			<van-button
				v-if="hasSubmitButton"
				:disabled="isLoading"
				size="small"
				type="primary"
				@click="() => emit('click:submit')"
			>
				{{ submitText || t('save') }}
			</van-button>
		</div>
	</van-cell-group>
</template>

<style module lang="scss">
@import './styles/AppFormNavigation.module';
</style>
