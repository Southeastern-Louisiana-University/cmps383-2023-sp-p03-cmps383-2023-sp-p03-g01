import { PageStyles } from '../../../styling/PageStyles';
import { STYLING_VARIABLES } from '../../../styling/StylingVariables';

export const AUTHENTICATION_MODAL_STYLING: PageStyles = {
  rootStyles: {
    display: 'grid',
    placeItems: 'center',
    gap: STYLING_VARIABLES.defaultSpacing,

    fontSize: STYLING_VARIABLES.defaultBodyFontSize,
  },
  fullWidth: {
    width: '100%',
  },
};
