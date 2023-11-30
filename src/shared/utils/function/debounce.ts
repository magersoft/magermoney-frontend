/**
 * Debounce function
 * @param fn
 * @param delay
 */
export function debounce(fn: (...args: any[]) => any, delay: number) {
	let timeoutId = 0 as any;
	return (...args: any[]) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => fn(...args), delay);
	};
}
