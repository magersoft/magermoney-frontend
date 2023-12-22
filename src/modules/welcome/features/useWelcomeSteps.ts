import { useRouter } from 'vue-router';

import { AppRoutes } from '@/app/router/constants';
import { useUser } from '@/modules/users';
import { WelcomeStepsType } from '@/modules/welcome/constants';
import { useWelcomeStepsStore } from '@/modules/welcome/infrastructure/stores';

export function useWelcomeSteps() {
	const {
		activeStep,
		setStep,
		restoreStore: restoreWelcomeStepsStore
	} = useWelcomeStepsStore();
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
			restoreWelcomeStepsStore();

			router.push({ name: AppRoutes.Dashboard });
		}
	};

	return {
		activeStep,
		setStep,
		showStepper,
		restoreWelcomeStepsStore,
		handleFinished
	};
}
