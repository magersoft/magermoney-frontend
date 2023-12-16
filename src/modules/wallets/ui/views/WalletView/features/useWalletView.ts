import { useRoute, useRouter } from 'vue-router';

import { AppPopups, usePopups } from '@/app/popups';
import { AppRoutes } from '@/app/router/constants';
import { useSavedFunds } from '@/modules/savedFunds';
import { useSavedFundsStore } from '@/modules/savedFunds/infrastructure/stores';
import { WalletActions } from '@/modules/wallets/ui/views/WalletView/constants';
import { useAppHeader } from '@/shared/ui/components';
import { checkActionSuccess } from '@/shared/utils';

export function useWalletView() {
	const route = useRoute();
	const router = useRouter();
	const { setHeader } = useAppHeader();
	const { setPopup } = usePopups();

	const { savedFund, isLoading } = useSavedFundsStore();
	const { fetchSavedFund, removeSavedFund } = useSavedFunds();

	const handleEditWallet = () => {
		setPopup(AppPopups.SaveWallet);
	};

	const handleDeleteWallet = async () => {
		if (!unref(savedFund)) return;

		const isRemovedSuccess = await removeSavedFund(
			unref(savedFund)!.source,
			unref(savedFund)!.id
		);

		if (isRemovedSuccess) {
			router.push({ name: AppRoutes.Wallets });
		}
	};

	const handleSelectAction = (action: WalletActions) => {
		if (action === WalletActions.Edit) {
			handleEditWallet();
		}
		if (action === WalletActions.Delete) {
			handleDeleteWallet();
		}
	};

	const fetchInitWallet = async () => {
		const walletId = route.params.id;

		const response = await fetchSavedFund(
			{ force: true, showError: true },
			Number(walletId)
		);

		if (response) {
			if (checkActionSuccess(unref(response.statusCode))) {
				setHeader({
					title: unref(savedFund)?.source
				});
				return true;
			}
		}

		router.push({ name: AppRoutes.NotFound });
	};

	fetchInitWallet();

	return {
		isLoading,
		savedFund,
		handleSelectAction
	};
}
