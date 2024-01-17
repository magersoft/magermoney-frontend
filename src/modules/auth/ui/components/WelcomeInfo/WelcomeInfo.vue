<script setup lang="ts"></script>

<template>
	<div :class="$style['welcome-info']">
		<div :class="$style['welcome-info__logo']">
			<div
				v-for="i in 6"
				:key="i"
				:class="[$style['layer'], $style[`layer-${i}`]]"
			/>
		</div>
		<h1 :class="$style['welcome-info__title']">MagerMoney</h1>
	</div>
</template>

<style module lang="scss">
@import './styles/WelcomeInfo.module';
</style>
