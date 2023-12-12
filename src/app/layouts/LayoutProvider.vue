<script setup lang="ts">
import { useRoute } from 'vue-router';

import { appConfig } from '@/app/config';
import { useAuth } from '@/modules/auth';
import { AppView } from '@/shared/ui/components';

const route = useRoute();
const { isAuthorization } = useAuth();

const layout = computed(() => {
	const layout = route.meta.layout || appConfig.defaultLayout;

	if (layout) {
		return unref(isAuthorization) ? `${layout}Layout` : `LoginLayout`;
	}

	return 'div';
});
</script>

<template>
	<component :is="layout">
		<app-view>
			<router-view />
		</app-view>
	</component>
</template>
