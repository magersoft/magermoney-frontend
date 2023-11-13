<script setup lang="ts">
interface AppHeaderProps {
	title: string;
}

defineProps<AppHeaderProps>();

const onClickLeft = () => {
	console.log('back');
};
</script>

<template>
	<van-nav-bar
		:title="title"
		left-text="Back"
		left-arrow
		@click-left="onClickLeft"
	/>
</template>
