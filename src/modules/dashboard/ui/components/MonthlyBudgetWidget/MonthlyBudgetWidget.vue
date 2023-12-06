<script setup lang="ts"></script>

<template>
	<div :class="$style['monthly-budget-widget']">
		<div :class="$style['monthly-budget-widget__circle']">
			<van-circle
				:current-rate="75"
				:rate="30"
				:speed="100"
				layer-color="#ebedf0"
				color="var(--van-success-color)"
				text="1500 $"
			/>
		</div>
		<div :class="$style['monthly-budget-widget__container']">
			<div :class="$style['monthly-budget-widget__rest']">
				осталось 500 $ из 2000 $
			</div>
			<div :class="$style['monthly-budget-widget__title']">Месячный бюджет</div>
			<div :class="$style['monthly-budget-widget__value']">
				<div :class="$style['monthly-budget-widget__balance']">2 000 $</div>
				<div :class="$style['monthly-budget-widget__arrow']">
					<van-icon name="arrow" />
				</div>
			</div>
		</div>
	</div>
</template>

<style module lang="scss">
@import './styles/MonthlyBudgetWidget.module';
</style>
