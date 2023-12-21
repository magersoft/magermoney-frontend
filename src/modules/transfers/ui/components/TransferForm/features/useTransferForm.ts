import { PickerConfirmEventParams } from 'vant/es/picker/types';

import { appConfig } from '@/app/config';
import { useCalculations } from '@/modules/calculations';
import { useCurrencies, useCurrencyFormat } from '@/modules/currencies';
import { useSavedFunds } from '@/modules/savedFunds';
import { useSettingsStore } from '@/modules/settings/infrastructure/stores';
import { createdTransferMessages } from '@/modules/transfers/constants/messages.ts';
import {
	initialTransferFormData,
	TInitialTransferFormData
} from '@/modules/transfers/domain';
import { useCreateTransferService } from '@/modules/transfers/infrastructure/services';
import { useTransfersStore } from '@/modules/transfers/infrastructure/stores';
import { mappingTransferFormData } from '@/modules/transfers/ui/components/TransferForm/utils';
import { useForm, useTranslateSystemMessages } from '@/shared/features';
import { useSettleResponse } from '@/shared/infrastructure/services/useSettleResponse.ts';
import { cloneDeep, debounce } from '@/shared/utils';

export function useTransferForm() {
	const transferFormData = ref<TInitialTransferFormData>(
		cloneDeep(initialTransferFormData)
	);
	const { isLoading } = useTransfersStore();
	const { createTransfer } = useCreateTransferService();
	const { settleResponse } = useSettleResponse();
	const { translateSystemMessages } = useTranslateSystemMessages();

	const { savedFundsItemsWithAmount, fetchSavedFunds } = useSavedFunds();
	const {
		transferDetails,
		fetchTransferDetails,
		isLoading: isLoadingTransferDetails,
		error: transferDetailsError
	} = useCalculations();
	const { currenciesItems, isLoading: isLoadingCurrencies } = useCurrencies();

	const { formRef, hasServerError, errorMessages, validateForm } =
		useForm(transferDetailsError);
	const { formatAmountWithCurrency } = useCurrencyFormat();
	const { currency } = useSettingsStore();

	const showDetails = ref(false);

	const savedFundsFromItems = computed(() =>
		unref(savedFundsItemsWithAmount).filter(
			(item) => item.id !== Number(unref(transferFormData).toId)
		)
	);

	const savedFundsToItems = computed(() =>
		unref(savedFundsItemsWithAmount).filter((item) => {
			return item.id !== Number(unref(transferFormData).fromId);
		})
	);

	const outcomeAmount = computed(() =>
		formatAmountWithCurrency(
			unref(transferDetails)?.outcome.amount || 0,
			unref(transferDetails)?.outcome.currency || unref(currency)
		)
	);
	const incomeAmount = computed(() =>
		formatAmountWithCurrency(
			unref(transferDetails)?.income.amount || 0,
			unref(transferDetails)?.income.currency || unref(currency)
		)
	);
	const exchangeRate = computed(() =>
		formatAmountWithCurrency(
			unref(transferDetails)?.rate.amount || 0,
			unref(transferDetails)?.rate.currency || unref(currency)
		)
	);

	const savedFundFromTitle = ref('');
	const handleConfirmFromPicker = async ({
		selectedOptions
	}: PickerConfirmEventParams) => {
		const [option] = selectedOptions;

		if (option) {
			transferFormData.value = {
				...unref(transferFormData),
				fromId: option.value as number
			};

			await handleTransferDetails();

			savedFundFromTitle.value = option.text as string;
		}
	};

	const savedFundToTitle = ref('');
	const handleConfirmToPicker = async ({
		selectedOptions
	}: PickerConfirmEventParams) => {
		const [option] = selectedOptions;

		if (option) {
			transferFormData.value = {
				...unref(transferFormData),
				toId: option.value as number
			};

			await handleTransferDetails();

			savedFundToTitle.value = option.text as string;
		}
	};

	const handleTransferDetails = async () => {
		if (
			unref(transferFormData).toId &&
			unref(transferFormData).fromId &&
			unref(transferFormData).amount
		) {
			showDetails.value = true;

			await fetchTransferDetails(
				{},
				mappingTransferFormData(unref(transferFormData))
			);
		}
	};

	const handleAmountChange = debounce(async (value: string) => {
		if (!value) {
			showDetails.value = false;
			return;
		}

		await handleTransferDetails();
	}, appConfig.debounceDelay);

	const handleSwitchSavedFunds = async () => {
		transferFormData.value = {
			...unref(transferFormData),
			fromId: unref(transferFormData).toId,
			toId: unref(transferFormData).fromId
		};

		savedFundFromTitle.value = unref(savedFundsItemsWithAmount).find(
			(item) => item.id === Number(unref(transferFormData).fromId)
		)?.text as string;
		savedFundToTitle.value = unref(savedFundsItemsWithAmount).find(
			(item) => item.id === Number(unref(transferFormData).toId)
		)?.text as string;

		await handleTransferDetails();
	};

	const handleSubmit = async () => {
		if (!(await validateForm())) return;

		const response = await createTransfer(
			{ showError: true },
			mappingTransferFormData(unref(transferFormData))
		);

		if (response) {
			settleResponse(response, {
				messages: translateSystemMessages(createdTransferMessages),
				onSuccess: async () => {
					transferFormData.value = { ...initialTransferFormData };
					savedFundToTitle.value = '';
					savedFundFromTitle.value = '';
					showDetails.value = false;

					await fetchSavedFunds({ force: true });
				}
			});
		}
	};

	return {
		formRef,
		transferFormData,
		savedFundsFromItems,
		savedFundsToItems,
		currenciesItems,
		isLoading,
		isLoadingCurrencies,
		isLoadingTransferDetails,
		savedFundFromTitle,
		savedFundToTitle,
		showDetails,
		outcomeAmount,
		incomeAmount,
		exchangeRate,
		hasServerError,
		errorMessages,
		handleAmountChange,
		handleSubmit,
		handleConfirmFromPicker,
		handleConfirmToPicker,
		handleSwitchSavedFunds,
		handleTransferDetails
	};
}
