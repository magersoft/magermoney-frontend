<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useAppHeader, useAppNav } from '@/shared/ui/components';

const { setHeader } = useAppHeader();
const { setNav } = useAppNav();

setHeader({
	isHidden: true
});
setNav({
	isHidden: true
});

const { t } = useI18n();

const onReload = () => {
	window.location.href = '/';
};
</script>

<template>
	<van-empty image="network" :description="t('internalServerError')">
		<van-button round type="primary" class="bottom-button" @click="onReload">
			{{ t('reload') }}
		</van-button>
	</van-empty>
</template>
