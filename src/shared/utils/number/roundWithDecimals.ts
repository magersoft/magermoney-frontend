/**
 * Rounds a number to a specified number of decimal places.
 *
 * @param {number} num - The number to be rounded.
 * @param {number} [decimals=2] - The number of decimal places to round to (default is 2).
 * @returns {string} The rounded number with two decimals.
 */
export function roundWithDecimals(num: number, decimals: number = 2): string {
	const factor = Math.pow(10, decimals);
	const roundedNumber = Math.ceil(num * factor) / factor;
	return roundedNumber.toFixed(decimals);
}
