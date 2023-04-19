/**
 * Formats a number as USD currency
 *
 * @param num - number to format
 */
export const formatNumberAsUSD = (num: number): string => {
  return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
};
