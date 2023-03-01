import { PageStyles } from '../../../styling/PageStyles';
import { STYLING_VARIABLES } from '../../../styling/StylingVariables';

/**
 * Styling for the HomePage component.
 */
export const HOME_PAGE_STYLING: PageStyles = {
  rootStyles: {
    width: '100%',

    display: 'flex',
    justifyContent: 'center',
  },
  rootContentStyles: {
    width: '100%',
    maxWidth: `${STYLING_VARIABLES.maxContentWidth}`,
    height: '100%',

    margin: `${STYLING_VARIABLES.defaultSpacing}`,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paperStyles: {
    width: '100%',
    maxWidth: '1000px',

    padding: `${STYLING_VARIABLES.defaultSpacing}`,

    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: `${STYLING_VARIABLES.defaultSpacing}`,
  },
};
