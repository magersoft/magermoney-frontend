<script setup lang="ts">
interface AppHeaderProps {
	title: string;
}

defineProps<AppHeaderProps>();
</script>

<template>
	<van-nav-bar :title="title" />
</template>
