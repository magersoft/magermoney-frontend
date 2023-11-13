export function isPhoneNumber(value: string) {
	return /^((\+7|7|8)+([0-9]){10})$/.test(value);
}
