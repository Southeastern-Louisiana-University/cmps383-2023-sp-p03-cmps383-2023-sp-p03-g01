import { COLOR_PALETTE } from '../../../styling/ColorPalette';
import { STYLING_VARIABLES } from '../../../styling/StylingVariables';

/**
 * Styling for the RoutePlanningPage component.
 */
export const ROUTE_PLANNING_PAGE_STYLING = {
  rootStyles: {
    display: 'flex',
    flexDirection: 'column',
    gap: STYLING_VARIABLES.defaultSpacing,

    padding: STYLING_VARIABLES.defaultSpacing,

    height: `calc(100% - 2 * ${STYLING_VARIABLES.defaultSpacing})`,
  } as React.CSSProperties,

  // ******************* //
  // ** Header Styles ** //
  // ******************* //
  headerStyles: {
    borderBottom: `1px solid ${COLOR_PALETTE.light.default.borderColor}`,

    paddingBottom: STYLING_VARIABLES.defaultSpacing,
  } as React.CSSProperties,

  stepperContentStyles: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '3rem',

    fontSize: STYLING_VARIABLES.defaultBodyFontSize,
  } as React.CSSProperties,
  stepperContentBlockStyles: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: STYLING_VARIABLES.defaultSpacing,
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
    gridTemplateColumns: '20px 1fr',
    alignItems: 'center',
    gap: STYLING_VARIABLES.defaultSpacing,
  } as React.CSSProperties,
  trainRouteAccordionControlStyles: {
    fontSize: STYLING_VARIABLES.defaultBodyFontSize,
  } as React.CSSProperties,

  // Review Page Styles
  reviewPageAccordionPanelStyles: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
  } as React.CSSProperties,

  // ******************* //
  // ** Footer Styles ** //
  // ******************* //
  footerStyles: {
    display: 'flex',
    justifyContent: 'center',
    gap: STYLING_VARIABLES.defaultSpacing,

    paddingTop: STYLING_VARIABLES.defaultSpacing,

    borderTop: `1px solid ${COLOR_PALETTE.light.default.borderColor}`,
  } as React.CSSProperties,
};
