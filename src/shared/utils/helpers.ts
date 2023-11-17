export function isString(value: any) {
	return typeof value === 'string';
}

export function isArray(value: any): boolean {
	return Array.isArray(value);
}

export function isSymbol(value: any) {
	return typeof value === 'symbol';
}

export function isObject(obj: any): obj is object {
	return obj !== null && typeof obj === 'object' && !Array.isArray(obj);
}

export function isDate(value: any) {
	return Object.prototype.toString.call(value) === '[object Date]';
}

export function isWindow(obj: any) {
	return obj !== null && obj !== undefined && obj === obj.window;
}
