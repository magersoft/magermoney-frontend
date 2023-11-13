<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { AUTH_CODE_LENGTH } from '@/app/auth/constants';
import { WelcomeInfo } from '@/app/auth/ui/components/WelcomeInfo';

import { useAuthForm } from './features';

const { t } = useI18n();

const {
	formRef,
	isLoading,
	loginFormData,
	errorMessages,
	hasServerError,
	validationRules,
	isAuthCode,
	authCode,
	authCodeTitle,
	loginSubmitHandler
} = useAuthForm();

const showKeyboard = ref(true);
</script>

<template>
	<van-form
		ref="formRef"
		:class="$style['auth-form']"
		@submit="loginSubmitHandler"
	>
		<WelcomeInfo />
		<template v-if="!isAuthCode">
			<van-cell-group inset>
				<van-field
					v-model="loginFormData.login"
					name="EmailOrPhone"
					clearable
					:disabled="isLoading"
					:placeholder="t('auth.emailOrPhone')"
					:rules="validationRules"
					:error="hasServerError"
					:error-message="errorMessages"
				/>
			</van-cell-group>
			<van-cell-group inset :class="$style['auth-form__actions']">
				<van-button
					round
					block
					type="primary"
					native-type="submit"
					:loading="isLoading"
				>
					{{ t('auth.submit') }}
				</van-button>
			</van-cell-group>
		</template>
		<transition name="van-fade">
			<div v-if="isAuthCode">
				<h2 class="cell-title">{{ authCodeTitle }}</h2>
				<van-password-input
					:value="authCode"
					:length="AUTH_CODE_LENGTH"
					:error-info="errorMessages"
					:focused="showKeyboard"
					@focus="showKeyboard = true"
				/>
				<van-number-keyboard
					v-model="authCode"
					:show="showKeyboard"
					@blur="showKeyboard = false"
				/>
			</div>
		</transition>
	</van-form>
</template>

<style module lang="scss">
@import './styles/AuthForm.module';
</style>
