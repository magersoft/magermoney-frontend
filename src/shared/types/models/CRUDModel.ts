import { RequestReturnValue } from '@/shared/types/api';

export interface CRUDModel<Entity, CreateDto, UpdateDto> {
	findAll: () => RequestReturnValue<Entity[]>;
	findOne: (id: number) => RequestReturnValue<Entity>;
	create: (payload: CreateDto) => RequestReturnValue<Entity>;
	update: (id: number, payload: UpdateDto) => RequestReturnValue<Entity>;
	remove: (id: number) => RequestReturnValue<Entity>;
}