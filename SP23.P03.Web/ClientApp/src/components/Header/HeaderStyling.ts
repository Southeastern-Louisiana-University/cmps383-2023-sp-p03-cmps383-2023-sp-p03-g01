import { COLOR_PALETTE } from '../../styling/ColorPalette';
import { PageStyles } from '../../styling/PageStyles';
import { STYLING_VARIABLES } from '../../styling/StylingVariables';

/**
 * Styling for the Header Component.
 */
export const HEADER_STYLING: PageStyles = {
  rootStyles: {
    width: '100%',
    height: STYLING_VARIABLES.headerHeight,

    borderBottom: `1px solid ${COLOR_PALETTE.light.default.borderColor}`,

    display: 'flex',
    justifyContent: 'center',
  },
  rootContentStyles: {
    width: '100%',
    maxWidth: STYLING_VARIABLES.maxContentWidth,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    color: COLOR_PALETTE.light.default.textColorPrimary,

    padding: '0.5rem',
  },

  /* The Logo & Company Name */
  entrackStyles: {
    display: 'flex',
    alignItems: 'center',

    cursor: 'pointer',
  },
  iconStyles: {
    // These calculations are to make the logo square while accounting for the padding
    width: `calc(${STYLING_VARIABLES.headerHeight} - 2 * ${STYLING_VARIABLES.defaultSpacing})`,
    height: `calc(${STYLING_VARIABLES.headerHeight} - 2 * ${STYLING_VARIABLES.defaultSpacing})`,
  },
  titleStyles: {
    marginLeft: '0.5rem',

    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  loggedInUserStyles: {
    display: 'flex',
    alignItems: 'center',

    maxWidth: '225px',
  },
  loggedInUserWelcomeMessageStyles: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};
