import { Button } from '@mantine/core';
import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { RoutePlanningPage } from '../../../../../models/RoutePlanningPages';
import { STYLING_VARIABLES } from '../../../../../styling/StylingVariables';
import { AppRoutes } from '../../../../../models/AppRoutes';
import { useNavigate } from 'react-router-dom';
import { useViewportSize } from '@mantine/hooks';
import { getMantineComponentSize } from '../../../../../util/getMantineComponentSize';
import { useSetRecoilState } from 'recoil';
import { currentRoutePlanningPageState } from '../../../../../recoil/atoms/RoutePlanningAtom';

/**
 * The buttons for the Departure Routes page.
 */
export function DepartureRoutesButtons(): React.ReactElement {
    const navigate = useNavigate();
    const { width: browserWidth } = useViewportSize();
    const componentSize = getMantineComponentSize(browserWidth);

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
                    setCurrentRoutePlanningPage(RoutePlanningPage.SEAT_SELECTION);
                }}
            >
                Continue to Seat Selection{' '}
                <AiOutlineArrowRight style={{ marginLeft: STYLING_VARIABLES.defaultSpacing }} />
            </Button>
        </>
    );
}
