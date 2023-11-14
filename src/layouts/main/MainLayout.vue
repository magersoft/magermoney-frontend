<script lang="ts">
export default {
	name: 'MainLayout'
};
</script>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

import { useInitLayout } from '@/layouts/main/features/useInitLayout.ts';
import { AppRoutes } from '@/router/constants';
import { mainNavigations } from '@/shared/constants';
import AppHeader from '@/shared/ui/AppHeader/AppHeader.vue';
import AppNav from '@/shared/ui/AppNav/AppNav.vue';

const route = useRoute();
const { t } = useI18n();

const pageTitle = computed(() =>
	t(`routes.${(route.name as string) || AppRoutes.Dashboard}`)
);

const pageNavigation = computed(() =>
	mainNavigations.map((item) => ({
		...item,
		title: t(`nav.${item.title}`)
	}))
);

useInitLayout();
</script>

<template>
	<app-header :title="pageTitle" />
	<router-view />
	<app-nav :items="pageNavigation" />
</template>

<style module lang="scss">
@import './styles/MainLayout.module';
</style>
