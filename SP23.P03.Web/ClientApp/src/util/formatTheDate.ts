/**
 * Formats the date to a en-US locale string: Month Day, Year.
 *
 * @param date The date to format.
 */
export const formatTheDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
};
