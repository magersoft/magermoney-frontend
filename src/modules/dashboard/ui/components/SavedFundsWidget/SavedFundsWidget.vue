<script setup lang="ts">
import { useRouter } from 'vue-router';

import { AppPopups, usePopups } from '@/app/popups';
import { AppRoutes } from '@/app/router/constants';
import { useSavedFundsWidget } from '@/modules/dashboard/ui/components/SavedFundsWidget/features';

const router = useRouter();
const { setPopup } = usePopups();
const { onlyThreeFunds, isLoading } = useSavedFundsWidget();

// [
//   { id: 1, title: 'Наличные', color: '#191919' },
//   { id: 2, title: 'Ledger', color: '#4934B1' },
//   {
//     id: 3,
//     title: 'Капитал Банк',
//     color: '#98750C'
//   }
//   // { id: 4, title: 'Wise', color: '#106800' }
//   // { id: 5, title: 'Альфа Банк', color: '#B13434' }
// ]
</script>

<template>
	<van-skeleton :loading="isLoading">
		<van-cell-group inset :class="$style['saved-funds-widget']">
			<div
				v-for="fund in onlyThreeFunds"
				:key="fund.id"
				:class="$style['saved-funds-widget__item']"
				@click="
					router.push({ name: AppRoutes.Wallet, params: { id: fund.id } })
				"
			>
				<div :class="$style['saved-funds-widget__title']">
					{{ fund.source }}
				</div>
				<div :class="$style['saved-funds-widget__value']">
					{{ fund.amount }}
				</div>
			</div>
			<div
				:class="$style['saved-funds-widget__item']"
				@click="setPopup(AppPopups.SaveWallet)"
			>
				<van-icon name="plus" />
			</div>
		</van-cell-group>

		<template #template>
			<van-skeleton-paragraph
				:style="{ height: 'calc(4rem - 8px)', marginTop: '8px' }"
			/>
		</template>
	</van-skeleton>
</template>

<style module lang="scss">
@import './styles/SavedFundsWidget.module';
</style>
