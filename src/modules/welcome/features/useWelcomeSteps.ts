import { useRouter } from 'vue-router';

import { AppRoutes } from '@/app/router/constants';
import { useUser } from '@/modules/users';
import { WelcomeStepsType } from '@/modules/welcome/constants';
import { useWelcomeStepsStore } from '@/modules/welcome/infrastructure/stores';

export function useWelcomeSteps() {
	const { activeStep, setStep, restoreStore } = useWelcomeStepsStore();
	const { updateUser } = useUser();
	const router = useRouter();

	const showStepper = computed(
		() => unref(activeStep) !== WelcomeStepsType.FINISHED
	);

	const handleFinished = async () => {
		const response = await updateUser(
			{ showError: true },
			{ isFirstTime: false }
		);

		if (unref(response?.data)) {
			restoreStore();

			router.push({ name: AppRoutes.Dashboard });
		}
	};

	return {
		activeStep,
		setStep,
		showStepper,
		handleFinished
	};
}
