<script setup lang="ts">
import type { WelcomeNavigation } from '@/shared/constants';

interface AppNavProps {
	items: WelcomeNavigation[];
}

defineProps<AppNavProps>();
</script>

<template>
	<van-tabbar route>
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
