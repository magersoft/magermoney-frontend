<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useTheme } from '@/app/settings';

const { t } = useI18n();
const { isDark, toggleTheme } = useTheme();
</script>

<template>
	<van-cell :title="t('settings.darkMode')" center>
		<template #right-icon>
			<van-switch :model-value="isDark" @change="toggleTheme" />
		</template>
	</van-cell>
</template>
