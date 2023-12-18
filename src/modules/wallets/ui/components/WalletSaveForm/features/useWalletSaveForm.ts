import { useI18n } from 'vue-i18n';

import { usePopups } from '@/app/popups';
import { useCurrencies } from '@/modules/currencies';
import { useSavedFunds } from '@/modules/savedFunds';
import { savedWalletMessages, walletColors } from '@/modules/wallets/constants';
import {
	initialWalletFormControls,
	TInitialWalletFormData
} from '@/modules/wallets/domain';
import {
	mappingCreateWalletFormData,
	mappingUpdateWalletFormData
} from '@/modules/wallets/ui/components/WalletSaveForm/utils';
import { useForm, useTranslateSystemMessages } from '@/shared/features';
import { useDialogAdapter } from '@/shared/infrastructure/adapters';
import { useSettleResponse } from '@/shared/infrastructure/services/useSettleResponse.ts';
import { cloneDeep, roundWithDecimals, trimString } from '@/shared/utils';

export function useWalletSaveForm() {
	const walletSaveFormData = ref<TInitialWalletFormData>(
		cloneDeep(initialWalletFormControls)
	);
	const {
		savedFund,
		isLoading,
		fetchSavedFunds,
		createSavedFund,
		updateSavedFund
	} = useSavedFunds();
	const { currenciesItems, isLoading: isLoadingCurrencies } = useCurrencies();

	const { t } = useI18n();
	const { formRef, validateForm, resetValidationForm } = useForm();
	const dialog = useDialogAdapter();
	const { handleClose } = usePopups();
	const { settleResponse } = useSettleResponse();
	const { translateSystemMessages } = useTranslateSystemMessages();

	const isEditing = computed(() => !!unref(savedFund));
	const title = computed(() =>
		unref(isEditing) ? t('wallets.edit') : t('wallets.add')
	);
	const isEditedAmount = computed<boolean>(
		() =>
			!!unref(savedFund) &&
			Number(roundWithDecimals(unref(savedFund)!.amount)) !==
				Number(trimString(unref(walletSaveFormData).amount))
	);

	const currentColorIdx = computed(() => {
		const idx = walletColors.indexOf(unref(walletSaveFormData).color);
		return idx === -1 ? 0 : idx;
	});
	watch(
		savedFund,
		(value) => {
			if (value) {
				walletSaveFormData.value = {
					source: value.source,
					amount: roundWithDecimals(value.amount),
					currency: value.currency.code,
					color: value.color
				};
			}
		},
		{ immediate: true }
	);

	const handleChangeColor = (colorIdx: number) => {
		walletSaveFormData.value = {
			...unref(walletSaveFormData),
			color: walletColors[colorIdx]
		};
	};

	const handleSubmit = async () => {
		if (await validateForm()) {
			if (unref(isEditedAmount)) {
				await dialog.confirm(t('wallets.titleEdit'), t('wallets.confirmEdit'), {
					confirmButtonText: t('confirm'),
					cancelButtonText: t('cancel'),
					confirmButtonColor: 'var(--van-success-color)'
				});
			}

			const response = unref(savedFund)
				? await updateSavedFund(
						{},
						mappingUpdateWalletFormData(unref(walletSaveFormData))
				  )
				: await createSavedFund(
						{},
						mappingCreateWalletFormData(unref(walletSaveFormData))
				  );

			if (response) {
				settleResponse(response, {
					messages: translateSystemMessages(savedWalletMessages),
					onSuccess: async () => {
						walletSaveFormData.value = {
							...initialWalletFormControls
						};

						resetValidationForm();
						handleClose();

						await fetchSavedFunds({ force: true });
					}
				});
			}
		}
	};

	return {
		title,
		formRef,
		walletSaveFormData,
		currentColorIdx,
		isLoading,
		isLoadingCurrencies,
		currenciesItems,
		handleChangeColor,
		handleSubmit
	};
}
