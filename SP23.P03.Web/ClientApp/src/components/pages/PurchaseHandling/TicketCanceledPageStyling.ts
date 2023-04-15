import { STYLING_VARIABLES } from '../../../styling/StylingVariables';

export const TICKET_CANCELED_PAGE_STYLING = {
    rootStyles: {
        width: '100%',
        maxWidth: `${STYLING_VARIABLES.maxContentWidth}`,
        height: '100%',

        margin: `${STYLING_VARIABLES.defaultSpacing}`,

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    } as React.CSSProperties,
};
