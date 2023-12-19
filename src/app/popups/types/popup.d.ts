import { AppPopups } from '@/app/popups';

export interface PopupOptions {
	onSuccess?: () => Promise<void> | void;
	onError?: () => Promise<void> | void;
	onClosed?: () => Promise<void> | void;
}

export interface PopupsState {
	popup: AppPopups | void;
	isShowed: boolean;
	options: PopupOptions | null;
}
