import { COLOR_PALETTE } from '../../../styling/ColorPalette';
import { STYLING_VARIABLES } from '../../../styling/StylingVariables';

/**
 * Styling for the RoutePlanningPage component.
 */
export const ROUTE_PLANNING_PAGE_STYLING = {
  rootStyles: {
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: `50px calc(100% - 100px - 2 * ${STYLING_VARIABLES.defaultSpacing}) 50px`,
    gap: STYLING_VARIABLES.defaultSpacing,

    padding: STYLING_VARIABLES.defaultSpacing,

    height: '100%',
  } as React.CSSProperties,

  // ******************* //
  // ** Header Styles ** //
  // ******************* //
  headerStyles: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    fontSize: STYLING_VARIABLES.defaultTitleFontSize,

    borderBottom: `1px solid ${COLOR_PALETTE.light.default.borderColor}`,
  } as React.CSSProperties,

  // ******************** //
  // ** Content Styles ** //
  // ******************** //
  contentStyles: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',

    overflowY: 'auto',
  } as React.CSSProperties,

  parentAccordionPanelStyles: {
    display: 'flex',
    flexDirection: 'column',
    gap: STYLING_VARIABLES.defaultSpacing,
  } as React.CSSProperties,

  // Train Route Row Styles
  trainRouteRowStyles: {
    display: 'grid',
    gridTemplateColumns: `20px calc(100% - 20px - ${STYLING_VARIABLES.defaultSpacing})`,
    alignItems: 'center',
    gap: STYLING_VARIABLES.defaultSpacing,
  } as React.CSSProperties,
  trainRouteAccordionControlStyles: {
    fontSize: STYLING_VARIABLES.defaultBodyFontSize,
  } as React.CSSProperties,

  // ******************* //
  // ** Footer Styles ** //
  // ******************* //
  footerStyles: {},
};
