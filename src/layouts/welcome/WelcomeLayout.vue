<script lang="ts">
export default {
	name: 'WelcomeLayout'
};
</script>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

import { welcomeNavigations } from '@/shared/constants';
import { AppHeader } from '@/shared/ui/AppHeader';
import { AppNav } from '@/shared/ui/AppNav';

const route = useRoute();
const { t } = useI18n();

const pageTitle = computed(() => t(`routes.${route.name as string}`));

const pageNavigation = computed(() =>
	welcomeNavigations.map((item) => ({
		...item,
		title: t(`nav.${item.title}`)
	}))
);
</script>

<template>
	<app-header :title="pageTitle" />
	<router-view />
	<app-nav :items="pageNavigation" />
</template>

<style module lang="scss">
@import './styles/LoginLayout.module';
</style>
