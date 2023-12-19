<script setup lang="ts">
import { AppLayoutProvider } from '@/app/layouts';
import { AppPopupsProvider } from '@/app/popups';
import { AppMain } from '@/shared/ui/components';
</script>

<template>
	<app-main>
		<app-layout-provider />
		<app-popups-provider />
	</app-main>
</template>
