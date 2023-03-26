import { MantineThemeOverride } from '@mantine/core';
import { COLOR_PALETTE } from './styling/ColorPalette';
import { STYLING_VARIABLES } from './styling/StylingVariables';

/**
 * Styling for the App Component.
 */
export const APP_STYLING = {
  rootStyles: {} as React.CSSProperties,

  contentRootStyles: {
    width: '100%',
    height: `calc(100% - ${STYLING_VARIABLES.headerHeight})`,

    display: 'flex',
    justifyContent: 'center',
  } as React.CSSProperties,

  contentStyles: {
    width: '100%',
    maxWidth: `${STYLING_VARIABLES.maxContentWidth}`,
    height: '100%',

    margin: `${STYLING_VARIABLES.defaultSpacing}`,
  } as React.CSSProperties,
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

          fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,

          maxWidth: '500px',

          '&:hover': {
            backgroundColor: COLOR_PALETTE.light.default.blueNcsHover,
          },
        },
      },
    },
    Drawer: {
      styles: {
        drawer: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        header: {
          width: '100%',
          maxWidth: `${STYLING_VARIABLES.maxContentWidth}`,

          fontSize: `${STYLING_VARIABLES.defaultTitleFontSize}`,
        },
        body: {
          width: '100%',
          maxWidth: `${STYLING_VARIABLES.maxContentWidth}`,
        },
      },
    },
    Modal: {
      styles: {
        header: {
          fontSize: `${STYLING_VARIABLES.defaultTitleFontSize}`,
        },
        body: {
          fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,
        },
      },
    },
    TextInput: {
      styles: {
        label: {
          fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,
        },
        input: {
          fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,
        },
      },
    },
    Select: {
      styles: {
        label: {
          fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,
        },
        input: {
          fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,
        },
        item: {
          fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,
        },
        separatorLabel: {
          fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,
        },
      },
    },
    NumberInput: {
      styles: {
        label: {
          fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,
        },
      },
    },
  },
};
