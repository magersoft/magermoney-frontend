<script lang="ts">
export default {
	name: 'MainLayout'
};
</script>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

import { useInitLayout } from '@/app/layouts/main/features/useInitLayout';
import { AppRoutes } from '@/app/router/constants';
import { mainNavigations } from '@/shared/constants';
import { AppHeader, AppNav } from '@/shared/ui/components';

const route = useRoute();
const { t } = useI18n();

const pageTitle = computed(() =>
	t(`routes.${(route.name as string) || AppRoutes.Dashboard}`)
);

const pageNavigation = computed(() =>
	mainNavigations.map((item) => ({
		...item,
		title: t(`nav.${item.title}`),
		children:
			item.children &&
			item.children?.map((child) => ({
				...child,
				title: t(`nav.${child.title}`)
			}))
	}))
);

useInitLayout();
</script>

<template>
	<app-header :title="pageTitle" />
	<slot />
	<app-nav :items="pageNavigation" />
</template>
