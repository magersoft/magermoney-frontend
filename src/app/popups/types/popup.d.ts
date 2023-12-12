import { AppPopups } from '@/app/popups';

export interface PopupsState {
	popup: AppPopups | void;
	isShowed: boolean;
}
