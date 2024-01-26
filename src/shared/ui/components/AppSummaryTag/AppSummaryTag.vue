<script setup lang="ts">
import { invertColor } from '@/shared/utils';

interface AppSummaryTagProps {
	title: string;
	value: string;
	color: string;
}

defineProps<AppSummaryTagProps>();
</script>

<template>
	<div :class="$style['app-summary-tag']">
		<div
			:class="$style['app-summary-tag__value']"
			:style="{ backgroundColor: color, color: invertColor(color, true) }"
		>
			{{ value }}
		</div>
		<div :class="$style['app-summary-tag__title']">{{ title }}</div>
	</div>
</template>

<style module lang="scss">
@import './styles/AppSummaryTag.module';
</style>
