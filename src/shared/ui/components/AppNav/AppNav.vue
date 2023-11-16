<script setup lang="ts">
import type { Navigation } from '@/shared/constants';

import { useAppNav } from './features';

interface AppNavProps {
	readonly items: Navigation[];
}

defineProps<AppNavProps>();

const { isHidden } = useAppNav();
</script>

<template>
	<van-tabbar v-if="!isHidden" route>
		<van-tabbar-item
			v-for="item in items"
			:key="item.title"
			:to="item.path"
			:icon="item.icon"
			replace
		>
			{{ item.title }}
		</van-tabbar-item>
	</van-tabbar>
</template>
