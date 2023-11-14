<script setup lang="ts">
import { useAuth } from '@/app/auth';
import { useAppHeader } from '@/shared/ui/AppHeader/features';

const { logout } = useAuth();
const { setHeader } = useAppHeader();

setHeader({
	isHidden: true
});
</script>

<template>
	<div>Dashboard view</div>
	<van-button @click="logout">Logout</van-button>
</template>

<style module lang="scss">
@import './styles/DashboardView.module';
</style>
