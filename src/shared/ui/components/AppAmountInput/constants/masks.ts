import { MaskInputOptions } from 'maska';

export const maskAmount: MaskInputOptions = {
	mask: '9 99#',
	tokens: {
		'9': {
			pattern: /[0-9]/,
			repeated: true
		}
	},
	reversed: true
};

export const maskPercent: MaskInputOptions = {
	mask: '###',
	tokens: {
		'9': {
			pattern: /[0-9]/,
			repeated: false
		}
	},
	reversed: false,
	postProcess: (value) => {
		const max = 100;
		return +value > max ? String(max) : value;
	}
};
