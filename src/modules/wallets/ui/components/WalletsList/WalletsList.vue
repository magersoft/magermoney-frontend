<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import draggable from 'vuedraggable';

import { WalletItem } from '@/modules/wallets/ui/components';
import { useWalletsList } from '@/modules/wallets/ui/components/WalletsList/features';
import WalletsListSkeleton from '@/modules/wallets/ui/components/WalletsList/WalletsListSkeleton.vue';
import { classNames } from '@/shared/utils';

interface WalletsListEvents {
	(event: 'click:sort', value: boolean): void;
}

const emit = defineEmits<WalletsListEvents>();

const { t } = useI18n();
const {
	isLoading,
	countOfWallets,
	savedFunds,
	hasSavedFunds,
	sortable,
	handleToggleSortable
} = useWalletsList({
	onSort: (value: boolean) => emit('click:sort', value)
});
</script>

<template>
	<div :class="$style['wallets-list']">
		<van-sticky :offset-top="50">
			<div :class="$style['wallets-list__header']">
				<div :class="$style['wallets-list__header-item']">
					<van-icon name="card" size="15" />
					<span>{{ countOfWallets }}</span>
				</div>
				<button
					v-if="hasSavedFunds"
					:class="
						classNames(
							$style['wallets-list__header-item'],
							$style['wallets-list__header-sort'],
							{ [$style['wallets-list__header-sort--active']]: sortable }
						)
					"
					@click="() => handleToggleSortable()"
				>
					<span>{{ sortable ? t('apply') : t('sort') }}</span>
					<van-icon name="sort" size="15" />
				</button>
			</div>
		</van-sticky>
		<template v-if="isLoading">
			<wallets-list-skeleton :count="4" />
		</template>
		<template v-else>
			<div v-if="hasSavedFunds" :class="$style['wallets-list__container']">
				<draggable :disabled="!sortable" :list="savedFunds" item-key="id">
					<template #item="{ element }">
						<wallet-item
							:item="element"
							:sortable="sortable"
							:class="
								classNames($style['wallets-list__item'], {
									[$style['wallets-list__item--sortable']]: sortable
								})
							"
						/>
					</template>
				</draggable>
			</div>
			<van-empty v-else :description="t('wallets.empty')">
				<van-button round type="primary" class="bottom-button">
					{{ t('add') }} {{ t('wallets.wallet1') }}
				</van-button>
			</van-empty>
		</template>
	</div>
</template>

<style module lang="scss">
@import './styles/WalletsList.module';
</style>
