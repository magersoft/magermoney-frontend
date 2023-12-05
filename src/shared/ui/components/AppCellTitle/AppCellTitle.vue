<script setup lang="ts">
interface AppCellTitleProps {
	readonly text?: string;
}

defineProps<AppCellTitleProps>();
</script>

<template>
	<h2 :class="$style['app-cell-title']">
		{{ text }}
		<slot />
	</h2>
</template>

<style module lang="scss">
@import './styles/AppCellTitle.module';
</style>
