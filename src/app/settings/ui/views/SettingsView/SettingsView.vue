<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { LangSwitcher, ThemeSwitcher } from '../../components';

const { t } = useI18n();
</script>

<template>
	<div :class="$style['settings-view']">
		<h2 class="cell-title">{{ t('settings.app') }}</h2>
		<ThemeSwitcher />
		<LangSwitcher />
	</div>
</template>

<style module lang="scss">
@import './styles/SettingsView.module';
</style>
