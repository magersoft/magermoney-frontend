<script setup lang="ts">
import { useWelcomeSteps } from '@/modules/welcome';
import { WelcomeStepsType } from '@/modules/welcome/constants';

const { setStep } = useWelcomeSteps();
</script>

<template>
	<div>
		<van-button @click="setStep(WelcomeStepsType.INCOME_SOURCES)">
			Назад
		</van-button>
	</div>
</template>
