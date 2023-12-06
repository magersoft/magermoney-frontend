<script setup lang="ts"></script>

<template>
	<div :class="$style['incomes-widget']">
		<div :class="$style['incomes-widget__icon']">
			<van-icon name="down" size="12" />
		</div>
		<div :class="$style['incomes-widget__container']">
			<div :class="$style['incomes-widget__title']">Доходы</div>
			<div :class="$style['incomes-widget__value']">
				<div :class="$style['incomes-widget__balance']">+ 2 500 $</div>
				<div :class="$style['incomes-widget__arrow']">
					<van-icon name="arrow" />
				</div>
			</div>
		</div>
	</div>
</template>

<style module lang="scss">
@import './styles/IncomesWidget.module';
</style>
