<script setup lang="ts">
import { useTheme } from '@/app/settings';
import LayoutProvider from '@/layouts/LayoutProvider.vue';
import { useRouterStore } from '@/router/store';
import { AppLoading } from '@/shared/ui/components';

const { theme } = useTheme();
const { isLoading } = useRouterStore();
</script>

<template>
	<van-config-provider :theme="theme">
		<div class="application">
			<app-loading v-if="isLoading" />
			<layout-provider />
		</div>
	</van-config-provider>
</template>
