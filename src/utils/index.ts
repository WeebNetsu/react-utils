/**
 * Check if all useRef elements passed in contains a value
 *
 * @param ...refs useRef elements
 * @returns boolean, true if all useRef elements contains a value
 */
export const checkAllRefs = (
	...args: React.RefObject<HTMLInputElement | HTMLTextAreaElement>[]
) => {
	const exists: boolean[] = args.map((arg) => !!arg.current);

	// if 'exists' includes a false value, then there is a current that does not exist
	return !exists.includes(false);
};
