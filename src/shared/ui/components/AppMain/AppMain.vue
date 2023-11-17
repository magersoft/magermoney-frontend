<script setup lang="ts">
import { useRouterStore } from '@/app/router/store';
import { useTheme } from '@/modules/settings';
import { AppLoading } from '@/shared/ui/components';

const { theme } = useTheme();
const { isLoading } = useRouterStore();
</script>

<template>
	<van-config-provider :theme="theme" tag="main" :class="$style['app-main']">
		<app-loading v-if="isLoading" />
		<slot />
	</van-config-provider>
</template>

<style module lang="scss">
@import './styles/AppMain.module';
</style>
