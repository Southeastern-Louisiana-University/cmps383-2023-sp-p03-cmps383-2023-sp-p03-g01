/**
 * Get the size of the Mantine Component based on the width of the screen using their default breakpoints.
 *
 * @param size The width of the screen in pixels.
 * @param upperLimit The upper limit of the size of the Mantine Component.
 *
 * @returns The size of the Mantine Component.
 */
export const getMantineComponentSize = (size: number, upperLimit?: 'md' | 'lg'): 'sm' | 'md' | 'lg' | 'xl' => {
  if (size <= 768) {
    return 'sm';
  }

  if (upperLimit === 'md' || size <= 992) {
    return 'md';
  }

  if (upperLimit === 'lg' || size <= 1200) {
    return 'lg';
  }

  return 'xl';
};
