import {
	showFailToast,
	showLoadingToast,
	showSuccessToast,
	showToast
} from 'vant';
import { ToastOptions, ToastWrapperInstance } from 'vant/lib/toast/types';

export type NotifyAdapterOptions = ToastOptions;

export interface NotifyAdapter {
	info: (
		message: string,
		options?: NotifyAdapterOptions
	) => ToastWrapperInstance;
	loading: (
		message: string,
		options?: NotifyAdapterOptions
	) => ToastWrapperInstance;
	success: (
		message: string,
		options?: NotifyAdapterOptions
	) => ToastWrapperInstance;
	fail: (
		message: string,
		options?: NotifyAdapterOptions
	) => ToastWrapperInstance;
}

export const useNotifyAdapter = (): NotifyAdapter => {
	const info = (
		message: string,
		options?: NotifyAdapterOptions
	): ToastWrapperInstance => {
		return showToast({
			message,
			...options
		});
	};

	const loading = (
		message: string,
		options?: NotifyAdapterOptions
	): ToastWrapperInstance => {
		return showLoadingToast({
			message,
			...options
		});
	};

	const success = (
		message: string,
		options?: NotifyAdapterOptions
	): ToastWrapperInstance => {
		return showSuccessToast({
			message,
			...options
		});
	};

	const fail = (
		message: string,
		options?: NotifyAdapterOptions
	): ToastWrapperInstance => {
		return showFailToast({
			message,
			...options
		});
	};

	return {
		info,
		loading,
		success,
		fail
	};
};
