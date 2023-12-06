<script setup lang="ts"></script>

<template>
	<div :class="$style['expenses-widget']">
		<div :class="$style['expenses-widget__icon']">
			<van-icon name="down" size="12" />
		</div>
		<div :class="$style['expenses-widget__container']">
			<div :class="$style['expenses-widget__title']">Расходы</div>
			<div :class="$style['expenses-widget__value']">
				<div :class="$style['expenses-widget__balance']">- 1 500 $</div>
				<div :class="$style['expenses-widget__arrow']">
					<van-icon name="arrow" />
				</div>
			</div>
		</div>
	</div>
</template>

<style module lang="scss">
@import './styles/ExpensesWidget.module';
</style>
