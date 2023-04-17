import React from 'react';
import { ROUTE_PLANNING_PAGE_STYLING } from '../../RoutePlanningPageRootStyling';
import { Accordion, ActionIcon, Checkbox, Text, Title, Tooltip } from '@mantine/core';
import { useRecoilValue } from 'recoil';
import { departureStationState, arrivalStationState } from '../../../../../recoil/atoms/HomePageAtom';
import { COLOR_PALETTE } from '../../../../../styling/ColorPalette';
import { IoMdTrain } from 'react-icons/io';
import { BlackArrow } from '../../../../../media/BlackArrow';
import { formatNumberAsUSD } from '../../../../../util/formatNumberAsUSD';

const SeatSelectButton = (props: React.HTMLProps<HTMLButtonElement>) => {
    return (
        <button
            type='button'
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

                height: '100%',
            }}
        >
            {props.children}
        </button>
    );
};

/**
 * The first step in the route planning process.
 */
export function DepartureRoutesPage(): React.ReactElement {
    const selectedDepartureStation = useRecoilValue(departureStationState);
    const selectedArrivalStation = useRecoilValue(arrivalStationState);

    /**
     * Departure Time, Arrival Time, Trip Duration, Total Stops, Cost
     * - Stop, Departure Time, Departure Station, Arrival Time, Arrival Station, Dwell Time, Layover
     */

    return (
        <div>
            <Accordion
                defaultValue='Departure Route'
                chevronPosition='left'
            >
                <Accordion.Item value='Departure Route'>
                    <Accordion.Control>
                        {selectedDepartureStation} to {selectedArrivalStation}
                    </Accordion.Control>
                    <Accordion.Panel>
                        <div style={ROUTE_PLANNING_PAGE_STYLING.parentAccordionPanelStyles}>
                            {/* Train 1 */}
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',

                                    height: '100px',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '2rem',

                                        height: '100%',
                                    }}
                                >
                                    <Checkbox />

                                    {/* Departs */}
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Text color={COLOR_PALETTE.light.default.textColorSecondary}>Departs</Text>
                                        <Title
                                            order={1}
                                            weight={'normal'}
                                        >
                                            12:20pm
                                        </Title>
                                    </div>

                                    {/* Trip Duration, Train Swaps */}
                                    <div
                                        style={{
                                            display: 'grid',
                                            justifyItems: 'center',
                                        }}
                                    >
                                        {/* Train Swaps */}
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                gap: '0.25rem',
                                            }}
                                        >
                                            <Tooltip label='Train Swaps During Route'>
                                                <ActionIcon>
                                                    <Text>3</Text>
                                                    <IoMdTrain />
                                                </ActionIcon>
                                            </Tooltip>
                                        </div>

                                        <BlackArrow />

                                        {/* Trip Duration */}
                                        <Text>23h 40m</Text>
                                    </div>

                                    {/* Arrives */}
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <Text color={COLOR_PALETTE.light.default.textColorSecondary}>Arrives</Text>
                                        <Title
                                            order={1}
                                            weight={'normal'}
                                        >
                                            12:20am
                                        </Title>
                                    </div>
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '2rem',

                                        height: '100%',
                                    }}
                                >
                                    {/* Coach */}
                                    <SeatSelectButton>
                                        <Text color={COLOR_PALETTE.light.default.textColorSecondary}>Coach</Text>
                                        <Title
                                            order={1}
                                            weight={'normal'}
                                        >
                                            {formatNumberAsUSD(156)}
                                        </Title>
                                    </SeatSelectButton>

                                    {/* First Class */}
                                    <SeatSelectButton>
                                        <Text color={COLOR_PALETTE.light.default.textColorSecondary}>First Class</Text>
                                        <Title
                                            order={1}
                                            weight={'normal'}
                                        >
                                            {formatNumberAsUSD(156)}
                                        </Title>
                                    </SeatSelectButton>

                                    {/* Sleeper */}
                                    <SeatSelectButton>
                                        <Text color={COLOR_PALETTE.light.default.textColorSecondary}>Sleeper</Text>
                                        <Title
                                            order={1}
                                            weight={'normal'}
                                        >
                                            {formatNumberAsUSD(156)}
                                        </Title>
                                    </SeatSelectButton>

                                    {/* Roomlet */}
                                    <SeatSelectButton>
                                        <Text color={COLOR_PALETTE.light.default.textColorSecondary}>Roomlet</Text>
                                        <Title
                                            order={1}
                                            weight={'normal'}
                                        >
                                            {formatNumberAsUSD(156)}
                                        </Title>
                                    </SeatSelectButton>
                                </div>
                            </div>
                        </div>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}
