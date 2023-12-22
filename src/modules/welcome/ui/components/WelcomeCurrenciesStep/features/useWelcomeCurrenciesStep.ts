import { useCurrencies } from '@/modules/currencies';
import { useWelcomeSteps } from '@/modules/welcome';
import { WelcomeStepsType } from '@/modules/welcome/constants';

export function useWelcomeCurrenciesStep() {
	const { saveCurrencies, currenciesIds } = useCurrencies();
	const { setStep } = useWelcomeSteps();

	const enableContinue = computed(() => unref(currenciesIds).length > 0);

	const handleContinue = async () => {
		const response = await saveCurrencies(
			{ showError: true, force: true },
			{ currenciesIds: unref(currenciesIds) }
		);

		if (unref(response?.data)) {
			setStep(WelcomeStepsType.INCOME_SOURCES);
		}
	};

	return {
		enableContinue,
		handleContinue
	};
}
