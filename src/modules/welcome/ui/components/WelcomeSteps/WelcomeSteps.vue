<script setup lang="ts">
import { useWelcomeSteps } from '@/modules/welcome';
import { welcomeSteps } from '@/modules/welcome/constants';

const { activeStep } = useWelcomeSteps();
</script>

<template>
	<van-steps :active="activeStep" :class="$style['welcome-steps']">
		<van-step v-for="welcomeStep of welcomeSteps" :key="welcomeStep.type">
			{{ welcomeStep.title }}
		</van-step>
	</van-steps>
</template>

<style module lang="scss">
@import './styles/WelcomeSteps.module';
</style>
