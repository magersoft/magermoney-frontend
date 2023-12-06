<script setup lang="ts"></script>

<template>
	<van-skeleton :loading="false">
		<van-cell-group inset :class="$style['saved-funds-widget']">
			<div
				v-for="item in [
					{ id: 1, title: 'Наличные', color: '#191919' },
					{ id: 2, title: 'Ledger', color: '#4934B1' },
					{
						id: 3,
						title: 'Капитал Банк',
						color: '#98750C'
					}
					// { id: 4, title: 'Wise', color: '#106800' }
					// { id: 5, title: 'Альфа Банк', color: '#B13434' }
				]"
				:key="item.id"
				:style="{ backgroundColor: item.color }"
				:class="$style['saved-funds-widget__item']"
			>
				<div :class="$style['saved-funds-widget__title']">{{ item.title }}</div>
				<div :class="$style['saved-funds-widget__value']">2 500 $</div>
			</div>
			<div :class="$style['saved-funds-widget__item']">
				<van-icon name="plus" />
			</div>
		</van-cell-group>

		<template #template>
			<van-skeleton-paragraph :style="{ height: '3rem' }" />
		</template>
	</van-skeleton>
</template>

<style module lang="scss">
@import './styles/SavedFundsWidget.module';
</style>
