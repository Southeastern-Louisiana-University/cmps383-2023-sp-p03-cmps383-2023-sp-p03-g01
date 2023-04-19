import React from 'react';
import { Button } from '@mantine/core';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { GrStripe } from 'react-icons/gr';
import { RoutePlanningPage } from '../../../../../models/RoutePlanningPages';
import { STYLING_VARIABLES } from '../../../../../styling/StylingVariables';
import { useViewportSize } from '@mantine/hooks';
import { useSetRecoilState } from 'recoil';
import { currentRoutePlanningPageState } from '../../../../../recoil/atoms/RoutePlanningAtom';
import { getMantineComponentSize } from '../../../../../util/getMantineComponentSize';

/**
 * The buttons for the Review & Pay page.
 */
export function ReviewAndPayButtons(): React.ReactElement {
    const { width: browserWidth } = useViewportSize();
    const componentSize = getMantineComponentSize(browserWidth);

    const setCurrentRoutePlanningPage = useSetRecoilState(currentRoutePlanningPageState);

    return (
        <>
            <Button
                size={componentSize}
                onClick={() => {
                    setCurrentRoutePlanningPage(RoutePlanningPage.SEAT_SELECTION);
                }}
            >
                <AiOutlineArrowLeft style={{ marginRight: STYLING_VARIABLES.defaultSpacing }} /> Back to Seat Selection
            </Button>

            <form
                action='/api/payment/create-checkout-session'
                method='POST'
            >
                <Button
                    type='submit'
                    size={componentSize}
                >
                    Checkout with Stripe <GrStripe style={{ marginLeft: STYLING_VARIABLES.defaultSpacing }} />
                </Button>
            </form>
        </>
    );
}
