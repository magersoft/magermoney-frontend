<script setup lang="ts">
import { useWelcomeSteps } from '@/modules/welcome';
import { stepsComponents } from '@/modules/welcome/constants';
import { WelcomeSteps } from '@/modules/welcome/ui/components';
import { useAppHeader, useAppNav } from '@/shared/ui/components';

const { setHeader } = useAppHeader();
const { setNav } = useAppNav();

setHeader({
	isHidden: false
});
setNav({
	isHidden: true
});

const { activeStep, showStepper } = useWelcomeSteps();
</script>

<template>
	<div :class="$style['welcome-view']">
		<welcome-steps v-if="showStepper" />
		<transition name="van-fade" mode="out-in">
			<keep-alive>
				<component :is="stepsComponents[activeStep]" />
			</keep-alive>
		</transition>
	</div>
</template>

<style module lang="scss">
@import './styles/WelcomeView.module';
</style>
