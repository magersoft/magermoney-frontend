import { AppPopups } from '@/app/popups';

export interface Navigation {
	title: string;
	icon: string;
	path?: string;
	children?: NavigationChildren[];
}

export interface NavigationChildren extends Navigation {
	popup?: AppPopups;
}
