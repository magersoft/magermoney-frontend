import { appConfig } from '@/app/config';
import { walletColors } from '@/modules/wallets/constants';

export type TInitialWalletFormData = {
	source: string;
	amount: string;
	currency: string;
	color: string;
	categoryId?: number;
};

export const initialWalletFormControls: TInitialWalletFormData = {
	source: '',
	amount: '',
	currency: appConfig.defaultCurrency,
	color: walletColors[0],
	categoryId: undefined
};
