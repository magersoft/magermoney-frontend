<script setup lang="ts">
import { AuthForm } from '@/app/auth/ui/components/AuthForm';
</script>

<template>
	<div :class="$style['login-view']">
		<AuthForm />
	</div>
</template>

<style module lang="scss">
@import './styles/LoginView.module';
</style>
