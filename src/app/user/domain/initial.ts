import { fetchStateInitialState } from '@/shared/domain';

import { NUser } from './Domain.ts';

export const userInitialState: NUser.IState = {
	...fetchStateInitialState,
	user: null
};
