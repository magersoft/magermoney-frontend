<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { CurrenciesPicker } from '@/modules/currencies';
import { useSettingsStore } from '@/modules/settings/infrastructure/stores';

const { t } = useI18n();

const { currency } = useSettingsStore();
</script>

<template>
	<currencies-picker>
		<template #activator="{ isLoading, onShowPicker }">
			<van-cell is-link :title="t('settings.currency')" @click="onShowPicker">
				<template #right-icon>
					<van-loading v-if="isLoading" size="20" />
					<div v-else class="van-cell__value">{{ currency }}</div>
				</template>
			</van-cell>
		</template>
	</currencies-picker>
</template>
