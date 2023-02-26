import { MantineThemeOverride } from '@mantine/core';
import { COLOR_PALETTE } from './styling/ColorPalette';
import { PageStyles } from './styling/PageStyles';
import { STYLING_VARIABLES } from './styling/StylingVariables';

/**
 * Styling for the App Component.
 */
export const APP_STYLING: PageStyles = {
  rootStyles: {},
  contentStyles: {
    width: '100%',
    height: `calc(100% - ${STYLING_VARIABLES.headerHeight})`,
  },
};

/**
 * Styling for Mantine Components in the app.
 */
export const mantineTheme: MantineThemeOverride = {
  components: {
    Button: {
      styles: {
        root: {
          backgroundColor: COLOR_PALETTE.light.default.blueNcs,

          '&:hover': {
            backgroundColor: COLOR_PALETTE.light.default.blueNcsHover,
          },
        },
      },
    },
  },
};
