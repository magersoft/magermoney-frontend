<script setup lang="ts">
import { useAppHeader } from './features';

interface AppHeaderProps {
	readonly title: string;
}

defineProps<AppHeaderProps>();

const {
	title: customTitle,
	textLeft,
	isLeftArrow,
	isHidden,
	onClickLeft
} = useAppHeader();
</script>

<template>
	<van-nav-bar
		v-if="!isHidden"
		:title="customTitle || title"
		:left-text="textLeft"
		:left-arrow="isLeftArrow"
		fixed
		:class="$style['app-header']"
		@click-left="onClickLeft"
	/>
</template>

<style module lang="scss">
@import './styles/AppHeader.module';
</style>
