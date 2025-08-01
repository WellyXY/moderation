/**
 * Creates a fetch function with predefined options.
 *
 * @param {Object} options - Configuration options for the fetch function.
 * @param {Object} options.next - Options specific to the Next.js fetch function.
 * @param {string} options.cache - The cache mode to use for the fetch request.
 * @returns {Function} A fetch function that takes a URL and optional RequestInit parameters.
 */
export const createFetch =
	(options: Pick<RequestInit, "next" | "cache">) =>
	(url: RequestInfo | URL, init?: RequestInit) => {
		return fetch(url, {
			...init,
			...options,
		})
	}
