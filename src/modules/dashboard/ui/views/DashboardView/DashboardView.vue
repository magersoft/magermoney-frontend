<script setup lang="ts">
import { useAppHeader } from '@/shared/ui/components';

const { setHeader } = useAppHeader();

setHeader({
	isHidden: true
});
</script>

<template>
	<div>Dashboard view</div>
</template>

<style module lang="scss">
@import './styles/DashboardView.module';
</style>
