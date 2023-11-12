<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { WelcomeInfo } from '@/app/auth/ui/components/WelcomeInfo';

const { t } = useI18n();
const authType = ref('email');
</script>

<template>
	<van-tabs v-model:active="authType">
		<van-form :class="$style['auth-form']">
			<WelcomeInfo />
			<van-tab :title="t('auth.email')" name="email">
				<van-cell-group inset>
					<van-field label="Email" name="Email" />
				</van-cell-group>
			</van-tab>
			<van-tab :title="t('auth.phone')" name="phone">
				<van-cell-group inset>
					<van-field label="Phone" name="Phone" />
				</van-cell-group>
			</van-tab>
			<div>
				<van-button round block native-type="submit">
					{{ t('auth.submit') }}
				</van-button>
			</div>
		</van-form>
	</van-tabs>
</template>

<style module lang="scss">
@import './styles/AuthForm.module';
</style>
