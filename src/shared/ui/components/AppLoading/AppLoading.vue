<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
	<div :class="$style['app-loading']">
		<van-loading color="#0094ff" vertical size="100">
			{{ t('loading') }} ...
		</van-loading>
	</div>
</template>

<style module lang="scss">
@import './styles/AppLoading.module';
</style>
