<script setup lang="ts">
import { useRouter } from 'vue-router';

import { AppRoutes } from '@/app/router/constants';
import { useSavedFundsWidget } from '@/modules/dashboard/ui/components/SavedFundsWidget/features';
import { invertColor } from '@/shared/utils';

const router = useRouter();
const { onlyThreeFunds, isLoading, handleAddSavedFund } = useSavedFundsWidget();
</script>

<template>
	<van-skeleton :loading="isLoading">
		<van-cell-group inset :class="$style['saved-funds-widget']">
			<div
				v-for="fund in onlyThreeFunds"
				:key="fund.id"
				:class="$style['saved-funds-widget__item']"
				:style="{
					backgroundColor: fund.color,
					color: invertColor(fund.color, true)
				}"
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
				@click="handleAddSavedFund"
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
