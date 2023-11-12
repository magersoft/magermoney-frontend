<script setup lang="ts">
import { useTheme } from '@/app/settings';
import LayoutProvider from '@/layouts/LayoutProvider.vue';
import { useRouterStore } from '@/router/store';
import { AppLoading } from '@/shared/ui/AppLoading';

const { theme } = useTheme();
const { isLoading } = useRouterStore();
</script>

<template>
	<van-config-provider :theme="theme">
		<div class="application">
			<app-loading v-if="isLoading" />
			<layout-provider v-else />
		</div>
	</van-config-provider>
</template>
