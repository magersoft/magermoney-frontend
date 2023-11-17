import { defineStore } from 'pinia';

import { WelcomeStepsType } from '@/modules/welcome/constants';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

interface WelcomeStepsState {
	activeStep: WelcomeStepsType;
}

const welcomeStepsStore = defineStore('welcomeSteps', {
	persist: true,
	state: (): WelcomeStepsState => ({
		activeStep: WelcomeStepsType.INCOME_SOURCES
	}),
	actions: {
		setStep(step: WelcomeStepsType) {
			this.activeStep = step;
		}
	}
});

export const useWelcomeStepsStore = () => useStoreAdapter(welcomeStepsStore());
