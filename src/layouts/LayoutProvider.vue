<script setup lang="ts">
import { useRoute } from 'vue-router';

import { appConfig } from '@/shared/config';

const route = useRoute();

const layout = computed(() => {
	const layout = route.meta.layout || appConfig.defaultLayout;

	if (layout) {
		return `${layout}Layout`;
	}

	return 'div';
});
</script>

<template>
	<component :is="layout">
		<router-view />
	</component>
</template>
