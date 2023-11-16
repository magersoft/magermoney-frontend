import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export interface RouterContext {
	to: RouteLocationNormalized;
	from: RouteLocationNormalized;
	next: NavigationGuardNext;
}

export interface RouterState {
	isLoading: boolean;
}
