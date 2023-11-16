<script setup lang="ts">
import { AuthForm } from '@/modules/auth/ui/components/AuthForm';
</script>

<template>
	<div :class="$style['login-view']">
		<auth-form />
	</div>
</template>

<style module lang="scss">
@import './styles/LoginView.module';
</style>
