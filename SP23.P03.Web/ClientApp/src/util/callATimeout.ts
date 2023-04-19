/**
 * Credit: https://stackoverflow.com/a/63006702
 *
 * Returns a promise that resolves after a given time in milliseconds.
 * Used to simulate promises.
 *
 * @param delay Time in milliseconds to wait before resolving
 */
export function callATimeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
}
