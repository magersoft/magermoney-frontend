import { fetchStateInitialState } from '@/shared/domain';

import { NUsers } from './Domain.ts';

export const API_NAMESPACE = 'users';

export const userInitialState: NUsers.IState = {
	...fetchStateInitialState,
	user: null
};
