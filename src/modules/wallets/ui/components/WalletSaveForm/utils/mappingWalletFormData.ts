import { NSavedFunds } from '@/modules/savedFunds/domain';
import { TInitialWalletFormData } from '@/modules/wallets/domain';
import { trimString } from '@/shared/utils';

export function mappingCreateWalletFormData(
	formData: TInitialWalletFormData
): NSavedFunds.ICreateSavedFund {
	return {
		...formData,
		amount: Number(trimString(formData.amount))
	};
}

export function mappingUpdateWalletFormData(
	formData: TInitialWalletFormData
): NSavedFunds.IUpdateSavedFund {
	const { source, color, amount } = formData;

	return {
		source,
		color,
		amount: Number(trimString(amount))
	};
}
