import { STYLING_VARIABLES } from '../../../styling/StylingVariables';

export const AUTHENTICATION_MODAL_STYLING = {
  rootStyles: {
    display: 'grid',
    placeItems: 'center',
    gap: STYLING_VARIABLES.defaultSpacing,

    fontSize: STYLING_VARIABLES.defaultBodyFontSize,
  } as React.CSSProperties,

  fullWidth: {
    width: '100%',
  } as React.CSSProperties,
};
