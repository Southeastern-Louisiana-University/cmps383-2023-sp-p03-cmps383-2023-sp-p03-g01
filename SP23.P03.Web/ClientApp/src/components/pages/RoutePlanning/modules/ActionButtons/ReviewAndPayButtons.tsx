import React from 'react';
import { Button } from '@mantine/core';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { GrStripe } from 'react-icons/gr';
import { RoutePlanningPage } from '../../../../../models/RoutePlanningPages';
import { STYLING_VARIABLES } from '../../../../../styling/StylingVariables';
import { useViewportSize } from '@mantine/hooks';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentRoutePlanningPageState } from '../../../../../recoil/atoms/RoutePlanningAtom';
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
