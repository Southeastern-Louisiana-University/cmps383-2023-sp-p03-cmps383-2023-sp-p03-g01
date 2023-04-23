import React from 'react';
import { TicketSummaryAccordionItem } from './modules/TicketSummaryAccordionItem';
import { departureRouteState, returnRouteState } from '../../../../../recoil/atoms/RoutePlanningAtom';
import { useRecoilValue } from 'recoil';

/**
 * The final screen in the route planning process.
 */
export function ReviewAndPayPage(): React.ReactElement {
    const departureRoute = useRecoilValue(departureRouteState);
    const returnRoute = useRecoilValue(returnRouteState);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {departureRoute && <TicketSummaryAccordionItem data={departureRoute} />}
            {returnRoute && <TicketSummaryAccordionItem data={returnRoute} />}
        </div>
    );
}
