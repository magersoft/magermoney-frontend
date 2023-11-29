export function trimString(value: string | number): string {
	return String(value).replaceAll(' ', '');
}
