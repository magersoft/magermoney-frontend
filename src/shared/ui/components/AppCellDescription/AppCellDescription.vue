<script setup lang="ts">
interface AppCellDescriptionProps {
	readonly text?: string;
}

defineProps<AppCellDescriptionProps>();
</script>

<template>
	<h2 :class="$style['app-cell-description']">
		{{ text }}
		<slot />
	</h2>
</template>

<style module lang="scss">
@import './styles/AppCellDescription.module';
</style>
