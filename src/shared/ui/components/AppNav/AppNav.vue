<script setup lang="ts">
import { useRouter } from 'vue-router';

import type { Navigation, NavigationChildren } from '@/app/layouts/types';
import { usePopups } from '@/app/popups';

import { useAppNav } from './features';

interface AppNavProps {
	readonly items: Navigation[];
}

defineProps<AppNavProps>();

const { nav } = useAppNav();
const { setPopup } = usePopups();
const router = useRouter();

const childrenItems = (items: Navigation[]) =>
	items.map((item) => ({
		...item,
		text: item.title
	}));

const onSelectChildren = (item: NavigationChildren) => {
	if (item.path) {
		router.push(item.path);
	}

	if (item.popup) {
		setPopup(item.popup, unref(nav).popupOptions);
	}
};
</script>

<template>
	<van-tabbar v-if="!nav.isHidden" route :class="$style['app-nav']">
		<template v-for="item in items" :key="item.title">
			<van-popover
				v-if="!!item.children"
				placement="top"
				:actions="childrenItems(item.children)"
				@select="onSelectChildren"
			>
				<template #reference>
					<van-tabbar-item :icon="item.icon">
						{{ item.title }}
					</van-tabbar-item>
				</template>
			</van-popover>

			<van-tabbar-item v-else :to="item.path" :icon="item.icon">
				{{ item.title }}
			</van-tabbar-item>
		</template>
	</van-tabbar>
</template>

<style module lang="scss">
@import './styles/AppNav.module';
</style>
