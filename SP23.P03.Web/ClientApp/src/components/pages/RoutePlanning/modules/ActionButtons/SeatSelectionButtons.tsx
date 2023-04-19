import React from 'react';
import { Button } from '@mantine/core';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { RoutePlanningPage } from '../../../../../models/RoutePlanningPages';
import { STYLING_VARIABLES } from '../../../../../styling/StylingVariables';
import { useViewportSize } from '@mantine/hooks';
import { getMantineComponentSize } from '../../../../../util/getMantineComponentSize';
import { useSetRecoilState } from 'recoil';
import { currentRoutePlanningPageState } from '../../../../../recoil/atoms/RoutePlanningAtom';

/**
 * The buttons for the seat selection page.
 */
export function SeatSelectionButtons(): React.ReactElement {
    const { width: browserWidth } = useViewportSize();
    const componentSize = getMantineComponentSize(browserWidth);

    const setCurrentRoutePlanningPage = useSetRecoilState(currentRoutePlanningPageState);

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

            <Button
                size={componentSize}
                onClick={() => {
                    setCurrentRoutePlanningPage(RoutePlanningPage.REVIEW_AND_PAY);
                }}
            >
                Continue to Review & Pay{' '}
                <AiOutlineArrowRight style={{ marginLeft: STYLING_VARIABLES.defaultSpacing }} />
            </Button>
        </>
    );
}
