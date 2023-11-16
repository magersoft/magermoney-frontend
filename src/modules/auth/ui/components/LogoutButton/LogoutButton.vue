<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useAuth } from '@/modules/auth';

const { t } = useI18n();
const { logout } = useAuth();
</script>

<template>
	<van-cell-group>
		<van-cell
			is-link
			:title="t('auth.logout')"
			:class="$style['logout-button']"
			@click="() => logout()"
		/>
	</van-cell-group>
</template>

<style module lang="scss">
@import './styles/LogoutButton.module';
</style>
