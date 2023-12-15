<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import { AppRoutes } from '@/app/router/constants';

const { t } = useI18n();
const router = useRouter();
</script>

<template>
	<van-empty image="error" :description="t('notFoundView')">
		<van-button
			round
			type="primary"
			class="bottom-button"
			@click="router.push({ name: AppRoutes.Dashboard })"
		>
			{{ t('routes.Dashboard') }}
		</van-button>
	</van-empty>
</template>
