<script setup lang="ts">
import { ConfigProviderTheme } from 'vant';

const theme = ref<ConfigProviderTheme>('dark');

const toggleTheme = () => {
	theme.value = unref(theme) === 'light' ? 'dark' : 'light';
};
</script>

<template>
	<van-config-provider :theme="theme">
		<div class="application">
			<van-nav-bar title="MagerMoney" />
			<van-button type="primary" @click="toggleTheme">Button</van-button>
			<van-field label="Label" placeholder="Text" />
		</div>
	</van-config-provider>
</template>
