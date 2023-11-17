import { useWelcomeStepsStore } from '@/modules/welcome/infrastructure/stores';

export function useWelcomeSteps() {
	const { activeStep, setStep } = useWelcomeStepsStore();

	return {
		activeStep,
		setStep
	};
}
