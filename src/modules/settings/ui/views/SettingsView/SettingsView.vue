<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { LogoutButton, useAuth } from '@/modules/auth';
import { AppCellTitle } from '@/shared/ui/components';

import { LangSwitcher, ThemeSwitcher } from '../../components';

const { t } = useI18n();
const { isAuthorization } = useAuth();
</script>

<template>
	<div :class="$style['settings-view']">
		<app-cell-title
			:text="t('settings.app')"
			class="settings-view__cell-title"
		/>
		<van-cell-group>
			<theme-switcher />
			<lang-switcher />
		</van-cell-group>
		<template v-if="isAuthorization">
			<logout-button :class="$style['settings-view__logout']" />
		</template>
	</div>
</template>

<style module lang="scss">
@import './styles/SettingsView.module';
</style>
