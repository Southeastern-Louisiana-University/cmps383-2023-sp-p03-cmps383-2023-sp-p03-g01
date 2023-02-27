import { useEffect, useState } from 'react';

/**
 * Credit: https://usehooks.com/useDebounce/
 *
 * Returns a value after the specified delay.
 *
 * @param value Value to debounce
 * @param delay Delay in milliseconds
 */
export function useDebounce<InputValue>(value: InputValue, delay: number): InputValue {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}
