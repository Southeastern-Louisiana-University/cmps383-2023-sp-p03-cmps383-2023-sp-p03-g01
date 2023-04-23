import { Button } from '@mantine/core';
import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { RoutePlanningPage } from '../../../../../models/RoutePlanningPages';
import { STYLING_VARIABLES } from '../../../../../styling/StylingVariables';
import { AppRoutes } from '../../../../../models/AppRoutes';
import { useNavigate } from 'react-router-dom';
import { useViewportSize } from '@mantine/hooks';
import { getMantineComponentSize } from '../../../../../util/getMantineComponentSize';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
    currentRoutePlanningPageState,
    departureRouteState,
    returnRouteState,
} from '../../../../../recoil/atoms/RoutePlanningAtom';

/**
 * The buttons for the Departure Routes page.
 */
export function DepartureRoutesButtons(): React.ReactElement {
    const navigate = useNavigate();
    const { width: browserWidth } = useViewportSize();
    const componentSize = getMantineComponentSize(browserWidth);

    const departureRoute = useRecoilValue(departureRouteState);
    const returnRoute = useRecoilValue(returnRouteState);
    const setCurrentRoutePlanningPage = useSetRecoilState(currentRoutePlanningPageState);

    const navigateToHome = (): void => {
        navigate(AppRoutes.HOME);
    };

    return (
        <>
            <Button
                size={componentSize}
                onClick={navigateToHome}
            >
                <AiOutlineArrowLeft style={{ marginRight: STYLING_VARIABLES.defaultSpacing }} /> Back to Home Page
            </Button>

            <Button
                size={componentSize}
                onClick={() => {
                    setCurrentRoutePlanningPage(RoutePlanningPage.REVIEW_AND_PAY);
                }}
                disabled={!departureRoute || !returnRoute}
            >
                Continue to Review & Pay{' '}
                <AiOutlineArrowRight style={{ marginLeft: STYLING_VARIABLES.defaultSpacing }} />
            </Button>
        </>
    );
}
