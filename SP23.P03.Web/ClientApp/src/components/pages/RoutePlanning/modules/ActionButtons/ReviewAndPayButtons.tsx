import React, { useEffect } from 'react';
import { Button } from '@mantine/core';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { GrStripe } from 'react-icons/gr';
import { RoutePlanningPage } from '../../../../../models/RoutePlanningPages';
import { STYLING_VARIABLES } from '../../../../../styling/StylingVariables';
import { useViewportSize } from '@mantine/hooks';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
    currentRoutePlanningPageState,
    departureRouteState,
    returnRouteState,
} from '../../../../../recoil/atoms/RoutePlanningAtom';
import { getMantineComponentSize } from '../../../../../util/getMantineComponentSize';
import { currentlyLoggedInUserState } from '../../../../../recoil/atoms/AuthenticationAtom';

/**
 * The buttons for the Review & Pay page.
 */
export function ReviewAndPayButtons(): React.ReactElement {
    const { width: browserWidth } = useViewportSize();
    const componentSize = getMantineComponentSize(browserWidth);

    const setCurrentRoutePlanningPage = useSetRecoilState(currentRoutePlanningPageState);
    const currentlyLoggedInUser = useRecoilValue(currentlyLoggedInUserState);

    // Add ticketIds to local storage
    const departureRoute = useRecoilValue(departureRouteState);
    const returnRoute = useRecoilValue(returnRouteState);

    useEffect(() => {
        if (departureRoute === null || returnRoute === null || currentlyLoggedInUser === null) return;

        const departureTicketIds = departureRoute.route.ticket?.map((route) => route.id);
        const returnTicketIds = returnRoute.route.ticket?.map((route) => route.id);

        if (departureTicketIds === undefined || returnTicketIds === undefined) return;

        const ticketIds = departureTicketIds.concat(returnTicketIds);

        localStorage.setItem('ticketIds', JSON.stringify(ticketIds));

        console.log('Ticket Ids updated');
    }, [currentlyLoggedInUser, departureRoute, returnRoute]);

    return (
        <>
            <Button
                size={componentSize}
                onClick={() => {
                    setCurrentRoutePlanningPage(RoutePlanningPage.DEPARTURE_ROUTE);
                }}
            >
                <AiOutlineArrowLeft style={{ marginRight: STYLING_VARIABLES.defaultSpacing }} /> Back to Route Selection
            </Button>

            <form
                action='/api/payment/create-checkout-session'
                method='POST'
            >
                <Button
                    type='submit'
                    size={componentSize}
                    disabled={!currentlyLoggedInUser}
                >
                    {currentlyLoggedInUser ? (
                        <>
                            Checkout with Stripe <GrStripe style={{ marginLeft: STYLING_VARIABLES.defaultSpacing }} />{' '}
                        </>
                    ) : (
                        <>Sign In to Checkout</>
                    )}
                </Button>
            </form>
        </>
    );
}
