import { COLOR_PALETTE } from '../../styling/ColorPalette';
import { STYLING_VARIABLES } from '../../styling/StylingVariables';

/**
 * Styling for the Header Component.
 */
export const HEADER_STYLING = {
  rootStyles: {
    width: '100%',
    height: `calc(${STYLING_VARIABLES.headerHeight} - 1px)`, // -1px to account for the border

    borderBottom: `1px solid ${COLOR_PALETTE.light.default.borderColor}`,

    display: 'flex',
    justifyContent: 'center',
  } as React.CSSProperties,

  rootContentStyles: {
    width: '100%',
    maxWidth: STYLING_VARIABLES.maxContentWidth,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    color: COLOR_PALETTE.light.default.textColorPrimary,

    margin: `${STYLING_VARIABLES.defaultSpacing}`,
  } as React.CSSProperties,

  /* The Logo & Company Name */
  entrackStyles: {
    display: 'flex',
    alignItems: 'center',

    cursor: 'pointer',
  } as React.CSSProperties,

  iconStyles: {
    // These calculations are to make the logo square while accounting for the padding
    width: `calc(${STYLING_VARIABLES.headerHeight} - 2 * ${STYLING_VARIABLES.defaultSpacing})`,
    height: `calc(${STYLING_VARIABLES.headerHeight} - 2 * ${STYLING_VARIABLES.defaultSpacing})`,
  } as React.CSSProperties,

  titleStyles: {
    marginLeft: `${STYLING_VARIABLES.defaultSpacing}`,

    fontSize: `${STYLING_VARIABLES.defaultTitleFontSize}`,
    fontWeight: 'bold',
  } as React.CSSProperties,

  loggedInUserStyles: {
    display: 'flex',
    alignItems: 'center',

    maxWidth: '225px',
  } as React.CSSProperties,

  loggedInUserWelcomeMessageStyles: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    fontSize: `${STYLING_VARIABLES.defaultBodyFontSize}`,
  } as React.CSSProperties,

  /* Navigation Drawer */
  navDrawerButtonContainerStyles: {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    gap: `${STYLING_VARIABLES.defaultSpacing}`,
  } as React.CSSProperties,

  navDrawerButtonStyles: {
    width: '100%',
  } as React.CSSProperties,
};
