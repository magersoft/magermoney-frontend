export interface AppFormProps {
	readonly hasSubmitButton?: boolean;
	readonly hasBackButton?: boolean;
	readonly hasAddButton?: boolean;
	readonly hideFormActionButtons?: boolean;
}

export interface AppFormEvents {
	(event: 'click:add'): void;
	(event: 'click:submit'): void;
	(event: 'click:back'): void;
}
