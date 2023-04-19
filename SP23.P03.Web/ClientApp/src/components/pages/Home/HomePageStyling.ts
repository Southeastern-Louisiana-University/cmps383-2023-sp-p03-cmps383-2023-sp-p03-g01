import { STYLING_VARIABLES } from '../../../styling/StylingVariables';

/**
 * Styling for the HomePage component.
 */
export const HOME_PAGE_STYLING = {
    rootStyles: {
        width: '100%',

        display: 'flex',
        justifyContent: 'center',
    } as React.CSSProperties,

    rootContentStyles: {
        width: '100%',
        maxWidth: `${STYLING_VARIABLES.maxContentWidth}`,
        height: '100%',

        padding: `${STYLING_VARIABLES.defaultRootContentPadding}`,

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    } as React.CSSProperties,

    paperStyles: {
        width: '100%',
        maxWidth: '1000px',

        padding: `${STYLING_VARIABLES.defaultSpacing}`,

        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: `${STYLING_VARIABLES.defaultSpacing}`,
    } as React.CSSProperties,

    paperContentStyles: {
        width: `calc(50% - ${STYLING_VARIABLES.defaultSpacing})`,
    } as React.CSSProperties,
};
