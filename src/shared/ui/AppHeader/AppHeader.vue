<script setup lang="ts">
import { useAppHeader } from '@/shared/ui/AppHeader/features';

interface AppHeaderProps {
	title: string;
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
		@click-left="onClickLeft"
	/>
</template>
