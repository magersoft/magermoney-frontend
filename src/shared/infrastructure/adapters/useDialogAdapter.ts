import { DialogOptions, showConfirmDialog, showDialog } from 'vant';
import { DialogAction } from 'vant/lib/dialog/types';

export type DialogAdapterOptions = DialogOptions;

export enum DialogActionType {
	CONFIRM = 'confirm',
	CANCEL = 'cancel'
}

export interface DialogAdapter {
	alert: (
		title: string,
		message?: string,
		options?: DialogAdapterOptions
	) => Promise<DialogAction | void>;
	confirm: (
		title: string,
		message?: string,
		options?: DialogAdapterOptions
	) => Promise<DialogAction | void>;
}

export const useDialogAdapter = (): DialogAdapter => {
	const alert = (
		title: string,
		message?: string,
		options?: DialogAdapterOptions
	): Promise<DialogAction | void> => {
		return showDialog({
			title,
			message,
			...options
		});
	};

	const confirm = (
		title: string,
		message?: string,
		options?: DialogAdapterOptions
	): Promise<DialogAction | void> => {
		return showConfirmDialog({
			title,
			message,
			...options
		});
	};

	return {
		alert,
		confirm
	};
};
