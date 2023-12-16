import { useToggle } from '@vueuse/core';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import { AppRoutes } from '@/app/router/constants';
import { useSavedFunds } from '@/modules/savedFunds';
import { declOfNum } from '@/shared/utils';

interface useWalletsListParams {
	onSort: (value: boolean) => void;
}

export function useWalletsList({ onSort }: useWalletsListParams) {
	const {
		hasSavedFunds,
		savedFunds,
		isLoading,
		countSavedFunds,
		updateSavedFundsOrders
	} = useSavedFunds();
	const { t } = useI18n();
	const router = useRouter();

	const [sortable, toggleSortable] = useToggle();
	const isChangedSortOrder = ref(false);

	const countOfWallets = computed(() =>
		t('wallets.countOfWallets', {
			count: unref(countSavedFunds),
			declination: declOfNum(unref(countSavedFunds), [
				t('wallets.wallet1'),
				t('wallets.wallet2'),
				t('wallets.wallet5')
			])
		})
	);

	const handleToggleSortable = async () => {
		toggleSortable();
		onSort(unref(sortable));

		if (unref(isChangedSortOrder)) {
			const ids = unref(savedFunds).map((item) => String(item.id));
			await updateSavedFundsOrders({ showError: true, quite: true }, { ids });

			isChangedSortOrder.value = false;
		}
	};

	const handleClickByWallet = (id: number) => {
		if (!unref(sortable)) {
			router.push({ name: AppRoutes.Wallet, params: { id: String(id) } });
		}
	};

	return {
		isLoading,
		hasSavedFunds,
		savedFunds,
		countOfWallets,
		sortable,
		isChangedSortOrder,
		handleToggleSortable,
		handleClickByWallet
	};
}
