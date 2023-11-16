<script setup lang="ts">
import LayoutProvider from '@/app/layouts/LayoutProvider.vue';
import { useRouterStore } from '@/app/router/store';
import { useTheme } from '@/modules/settings';
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
