<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import { AppRoutes } from '@/app/router/constants';
import { LogoutButton, useAuth } from '@/modules/auth';
import { AppCellTitle } from '@/shared/ui/components';

import { LangSwitcher, ThemeSwitcher } from '../../components';

const { t } = useI18n();
const { isAuthorization } = useAuth();
const router = useRouter();
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
			<van-cell
				v-if="isAuthorization"
				is-link
				:title="t('routes.Currencies')"
				@click="router.push({ name: AppRoutes.Currencies })"
			/>
			<van-cell
				v-if="isAuthorization"
				is-link
				:title="t('routes.Categories')"
			/>
		</van-cell-group>

		<template v-if="isAuthorization">
			<app-cell-title :text="t('settings.editProfile')" />
			<van-cell-group>
				<van-cell
					is-link
					:title="t('routes.IncomeSources')"
					@click="router.push({ name: AppRoutes.IncomeSources })"
				/>
				<van-cell
					is-link
					:title="t('routes.ExpenseSources')"
					@click="router.push({ name: AppRoutes.ExpenseSources })"
				/>
				<van-cell
					is-link
					:title="t('routes.SavedFunds')"
					@click="router.push({ name: AppRoutes.SavedFunds })"
				/>
				<van-cell
					is-link
					:title="t('routes.AccumulationFunds')"
					@click="router.push({ name: AppRoutes.AccumulationFunds })"
				/>
			</van-cell-group>
			<logout-button :class="$style['settings-view__logout']" />
		</template>
	</div>
</template>

<style module lang="scss">
@import './styles/SettingsView.module';
</style>
