export function generateColor() {
	const hex = Math.floor(Math.random() * 16777215).toString(16);

	if (hex.length < 6) {
		return generateColor();
	}

	return '#' + hex;
}
