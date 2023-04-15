import React from 'react';
import { ROUTE_PLANNING_PAGE_STYLING } from './RoutePlanningPageRootStyling';
import { useRecoilValue } from 'recoil';
import { RoutePlanningStepper } from './modules/RoutePlanningStepper';
import { currentRoutePlanningPageState } from '../../../recoil/atoms/RoutePlanningAtom';
import { RoutePlanningPage } from '../../../models/RoutePlanningPages';
import { DepartureRoutesPage } from './modules/RoutePlanningPages/DepartureRoutesPage';
import { SeatSelectionPage } from './modules/RoutePlanningPages/SeatSelectionPage';
import { ReviewAndPayPage } from './modules/RoutePlanningPages/ReviewAndPayPage';
import { DepartureRoutesButtons } from './modules/ActionButtons/DepartureRoutesButtons';
import { SeatSelectionButtons } from './modules/ActionButtons/SeatSelectionButtons';
import { ReviewAndPayButtons } from './modules/ActionButtons/ReviewAndPayButtons';

/**
 * The main page for route planning.
 */
export function RoutePlanningPageRoot(): React.ReactElement {
    const currentRoutePlanningPage = useRecoilValue(currentRoutePlanningPageState);

    return (
        <div style={ROUTE_PLANNING_PAGE_STYLING.rootStyles}>
            <RoutePlanningStepper />

            {/* Content */}
            <div style={ROUTE_PLANNING_PAGE_STYLING.contentStyles}>
                {/* Departure Route */}
                {currentRoutePlanningPage === RoutePlanningPage.DEPARTURE_ROUTE && <DepartureRoutesPage />}

                {/* Seat Selection Page */}
                {currentRoutePlanningPage === RoutePlanningPage.SEAT_SELECTION && <SeatSelectionPage />}

                {/* Review & Pay */}
                {currentRoutePlanningPage === RoutePlanningPage.REVIEW_AND_PAY && <ReviewAndPayPage />}
            </div>

            {/* Footer Buttons */}
            <div style={ROUTE_PLANNING_PAGE_STYLING.footerStyles}>
                {/* Departure Route Buttons */}
                {currentRoutePlanningPage === RoutePlanningPage.DEPARTURE_ROUTE && <DepartureRoutesButtons />}

                {/* Seat Selection Page Buttons */}
                {currentRoutePlanningPage === RoutePlanningPage.SEAT_SELECTION && <SeatSelectionButtons />}

                {/* Review & Pay Buttons */}
                {currentRoutePlanningPage === RoutePlanningPage.REVIEW_AND_PAY && <ReviewAndPayButtons />}
            </div>
        </div>
    );
}
