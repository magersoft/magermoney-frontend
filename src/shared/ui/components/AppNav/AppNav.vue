<script setup lang="ts">
import { useRouter } from 'vue-router';

import { usePopups } from '@/app/popups';
import type { Navigation, NavigationChildren } from '@/shared/constants';

import { useAppNav } from './features';

interface AppNavProps {
	readonly items: Navigation[];
}

defineProps<AppNavProps>();

const { isHidden } = useAppNav();
const router = useRouter();
const { setPopup } = usePopups();

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
		setPopup(item.popup);
	}
};
</script>

<template>
	<van-tabbar v-if="!isHidden" route :class="$style['app-nav']">
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
