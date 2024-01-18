<script setup lang="ts">
import { useWelcomeSteps } from '@/modules/welcome';
import { WelcomeStepsType } from '@/modules/welcome/constants';
import { AppCellDescription, AppCellTitle } from '@/shared/ui/components';

const { setStep, handleFinished } = useWelcomeSteps();
</script>

<template>
	<div>
		<app-cell-title text="Подтвердите ваши данные" />
		<app-cell-description
			text="Вы можете вернуться и отредактировать их сейчас или позже"
		/>
		<van-cell-group>
			<van-cell title="Ваши доходы" value="100" />
			<van-cell title="Ваши накопления" value="100" />
			<van-cell title="Вы сохраняете" value="100" />
			<van-cell title="Вы тратите" value="100" />
		</van-cell-group>
		<van-button size="small" @click="setStep(WelcomeStepsType.CURRENCIES)">
			Редактировать
		</van-button>
		<van-button type="success" size="small" @click="handleFinished">
			Продолжить
		</van-button>
	</div>
</template>
