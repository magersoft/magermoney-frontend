<script setup lang="ts">
import { AppLayout } from '@/app/layouts';
import { AppPopupsProvider } from '@/app/popups';
import { AppMain } from '@/shared/ui/components';
</script>

<template>
	<app-main>
		<app-layout />
		<app-popups-provider />
	</app-main>
</template>
