import { RequestReturnValue } from '@/shared/types/api';

export interface CRUDModel<
	Entity,
	CreateDto,
	UpdateDto,
	QueryDto = Record<string, never>
> {
	fetchAll: (query?: QueryDto) => RequestReturnValue<Entity[]>;
	fetchOne: (id: number) => RequestReturnValue<Entity>;
	create: (payload: CreateDto) => RequestReturnValue<Entity>;
	update: (id: number, payload: UpdateDto) => RequestReturnValue<Entity>;
	remove: (id: number) => RequestReturnValue<Entity>;
}
