<script setup lang="ts">
import { useLogout } from '@/app/auth';

const { logout } = useLogout();
</script>

<template>
	<div>Dashboard view</div>
	<van-button @click="logout">Logout</van-button>
</template>

<style module lang="scss">
@import './styles/DashboardView.module';
</style>
