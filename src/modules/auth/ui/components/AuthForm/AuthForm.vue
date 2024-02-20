<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import {
	AUTH_CODE_COUNTDOWN,
	AUTH_CODE_LENGTH
} from '@/modules/auth/constants';
import { WelcomeInfo } from '@/modules/auth/ui/components/WelcomeInfo';
import { AppCellTitle } from '@/shared/ui/components';

import { useAuthForm } from './features';

const { t } = useI18n();

const {
	formRef,
	passwordInputRef,
	isLoading,
	loginFormData,
	errorMessages,
	hasServerError,
	validationRules,
	isSendAuthCode,
	authCode,
	authCodeTitle,
	authCodeCountdown,
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
		<welcome-info />
		<template v-if="!isSendAuthCode">
			<van-cell-group inset>
				<van-field
					v-model="loginFormData.login"
					name="EmailOrPhone"
					clearable
					type="text"
					:disabled="isLoading"
					:placeholder="t('auth.emailOrPhone')"
					:rules="validationRules"
					:error="hasServerError"
					:error-message="errorMessages"
					autocomplete="on"
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
			<div v-if="isSendAuthCode">
				<app-cell-title :text="authCodeTitle" />
				<van-password-input
					ref="passwordInputRef"
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
				<div v-if="false" :class="$style['auth-form__resend']">
					{{ t('auth.requestCode') }}
					<van-count-down
						ref="authCodeCountdown"
						:time="AUTH_CODE_COUNTDOWN"
						format="ss"
					/>
				</div>
			</div>
		</transition>
	</van-form>
</template>

<style module lang="scss">
@import './styles/AuthForm.module';
</style>
