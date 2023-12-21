import {
	NTransfers,
	TInitialTransferFormData
} from '@/modules/transfers/domain';

export function mappingTransferFormData(
	formData: TInitialTransferFormData
): NTransfers.ICreateTransfer {
	return {
		...formData,
		amount: Number(formData.amount.replaceAll(' ', '')),
		toId: Number(formData.toId),
		fromId: Number(formData.fromId)
	};
}
