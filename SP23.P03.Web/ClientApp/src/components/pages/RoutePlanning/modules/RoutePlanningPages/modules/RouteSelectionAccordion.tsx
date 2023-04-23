import { Accordion, Title, Tooltip, ActionIcon, Text, Checkbox } from '@mantine/core';
import React from 'react';
import { IoMdTrain } from 'react-icons/io';
import { BlackArrow } from '../../../../../../media/BlackArrow';
import { COLOR_PALETTE } from '../../../../../../styling/ColorPalette';
import { formatNumberAsUSD } from '../../../../../../util/formatNumberAsUSD';
import { SeatType, SeatPrice } from '../../../../../../models/SeatTypes';
import { getBackgroundBasedOnSeat } from '../../../../../../util/getBackgroundBasedOnSeat';
import { TrainScheduledRoutesDto } from '../../../../../../api/EntrackApi.ts/EntrackApi';
import dayjs from 'dayjs';
import { useRecoilState, useRecoilValue } from 'recoil';
import { departureRouteState, returnRouteState } from '../../../../../../recoil/atoms/RoutePlanningAtom';
import { departureStationState } from '../../../../../../recoil/atoms/HomePageAtom';

interface SeatSelectButtonProps {
    seatType: SeatType;
    seatPrice: number;
    onClick: () => void;
}
const SeatSelectButton = ({ seatPrice, seatType, onClick }: SeatSelectButtonProps): React.ReactElement => {
    const getHoverBackgroundColor = (): string => {
        switch (seatType) {
            case SeatType.COACH:
                return COLOR_PALETTE.light.default.coachSeatButtonBackgroundHover;
            case SeatType.FIRST_CLASS:
                return COLOR_PALETTE.light.default.firstClassSeatButtonBackgroundHover;
            case SeatType.SLEEPER:
                return COLOR_PALETTE.light.default.sleeperSeatButtonBackgroundHover;
            case SeatType.ROOMLET:
                return COLOR_PALETTE.light.default.roomletSeatButtonBackgroundHover;
        }
    };

    const getTextColor = (): string => {
        switch (seatType) {
            case SeatType.COACH:
                return COLOR_PALETTE.light.default.coachSeatButtonText;
            case SeatType.FIRST_CLASS:
                return COLOR_PALETTE.light.default.firstClassSeatButtonText;
            case SeatType.SLEEPER:
                return COLOR_PALETTE.light.default.sleeperSeatButtonText;
            case SeatType.ROOMLET:
                return COLOR_PALETTE.light.default.roomletSeatButtonText;
        }
    };

    const getText = (): string => {
        switch (seatType) {
            case SeatType.COACH:
                return 'Coach';
            case SeatType.FIRST_CLASS:
                return 'First Class';
            case SeatType.SLEEPER:
                return 'Sleeper';
            case SeatType.ROOMLET:
                return 'Roomlet';
        }
    };

    return (
        <button
            type='button'
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

                height: '100%',

                borderRadius: '0.25rem',

                backgroundColor: getBackgroundBasedOnSeat(seatType),
            }}
            onMouseEnter={(e) => {
                // change cursor to pointer
                e.currentTarget.style.cursor = 'pointer';

                // change background color
                e.currentTarget.style.backgroundColor = getHoverBackgroundColor();
            }}
            onMouseLeave={(e) => {
                // change background color
                e.currentTarget.style.backgroundColor = getBackgroundBasedOnSeat(seatType);
            }}
            onClick={onClick}
        >
            <Text color={getTextColor()}>{getText()}</Text>
            <Title
                order={1}
                weight={'normal'}
            >
                {formatNumberAsUSD(seatPrice)}
            </Title>
        </button>
    );
};

interface RouteSelectionAccordionProps {
    scheduledRoutes: TrainScheduledRoutesDto[];
}
/**
 * Selecting routes & seats.
 */
export function RouteSelectionAccordion({ scheduledRoutes }: RouteSelectionAccordionProps): React.ReactElement {
    const selectedDepartureStation = useRecoilValue(departureStationState);
    const [departureRoute, setDepartureRoute] = useRecoilState(departureRouteState);
    const [returnRoute, setReturnRoute] = useRecoilState(returnRouteState);

    const selectedSeat =
        selectedDepartureStation === scheduledRoutes[0]?.departureStation ? departureRoute?.seat : returnRoute?.seat;
    const selectedRouteId =
        selectedDepartureStation === scheduledRoutes[0]?.departureStation
            ? departureRoute?.departureRoute.id
            : returnRoute?.returnRoute.id;

    const clearSelectedRoute = (): void => {
        if (selectedDepartureStation === scheduledRoutes[0]?.departureStation) {
            setDepartureRoute(null);
        } else {
            setReturnRoute(null);
        }
    };

    const updateSelectedRoute = (index: number, seat: SeatType): void => {
        if (selectedDepartureStation === scheduledRoutes[0]?.departureStation) {
            setDepartureRoute({
                departureRoute: scheduledRoutes[index]!,
                seat: seat,
            });
        } else {
            setReturnRoute({
                returnRoute: scheduledRoutes[index]!,
                seat: seat,
            });
        }
    };

    const renderSelectedSeatButton = (index: number, trainSwaps: number): React.ReactElement => {
        if (selectedSeat === undefined) return <></>;

        switch (selectedSeat) {
            case SeatType.COACH:
                return (
                    <SeatSelectButton
                        seatType={SeatType.COACH}
                        seatPrice={SeatPrice.COACH * trainSwaps}
                        onClick={() => updateSelectedRoute(index, SeatType.COACH)}
                    />
                );
            case SeatType.FIRST_CLASS:
                return (
                    <SeatSelectButton
                        seatType={SeatType.FIRST_CLASS}
                        seatPrice={SeatPrice.FIRST_CLASS * trainSwaps}
                        onClick={() => updateSelectedRoute(index, SeatType.FIRST_CLASS)}
                    />
                );
            case SeatType.SLEEPER:
                return (
                    <SeatSelectButton
                        seatType={SeatType.SLEEPER}
                        seatPrice={SeatPrice.SLEEPER * trainSwaps}
                        onClick={() => updateSelectedRoute(index, SeatType.SLEEPER)}
                    />
                );

            case SeatType.ROOMLET:
                return (
                    <SeatSelectButton
                        seatType={SeatType.ROOMLET}
                        seatPrice={SeatPrice.ROOMLET}
                        onClick={() => updateSelectedRoute(index, SeatType.ROOMLET)}
                    />
                );
        }
    };

    return (
        <Accordion
            defaultValue='Departure Route'
            chevronPosition='left'
        >
            <Accordion.Item value='Departure Route'>
                <Accordion.Control>
                    {scheduledRoutes[0]?.departureStation} to {scheduledRoutes[0]?.arrivalStation}
                </Accordion.Control>
                <Accordion.Panel>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {scheduledRoutes.map((route, index) => {
                            if (
                                route.routes === null ||
                                route.routes === undefined ||
                                route.ticket === null ||
                                route.ticket === undefined
                            ) {
                                return <></>;
                            }

                            const trainSwaps = route.routes.reduce((acc, curr) => {
                                if (curr.layover) {
                                    acc += 1;
                                }

                                return acc;
                            }, 0);

                            const departureTime = dayjs(route.routes[0]?.departureTime);
                            const departureTimeFormatted = departureTime.format('h:mm A');

                            const arrivalTime = dayjs(route.routes[route.routes.length - 1]?.arrivalTime);
                            const arrivalTimeFormatted = arrivalTime.format('h:mm A');

                            // Calculate total travel time
                            const totalTravelTime = arrivalTime.diff(departureTime, 'minute');
                            const hours = Math.floor(totalTravelTime / 60);
                            const minutes = totalTravelTime % 60;
                            const tripDuration = `${hours}hr ${minutes}min`;

                            /**
                             * Determine what seats are available on a route.
                             * Loop through each SeatPrice and check if it exists on a ticket for all unique routeIds in the ticket array.
                             *
                             * This is probably the least inefficient way to do this, but time is running out.
                             */
                            const possibleSeats: SeatType[] = [
                                SeatType.COACH,
                                SeatType.FIRST_CLASS,
                                SeatType.SLEEPER,
                                SeatType.ROOMLET,
                            ];
                            const availableSeats: SeatType[] = [];
                            const uniqueRouteIds: number[] = route.ticket.reduce((acc, curr) => {
                                if (curr.routeId === null || curr.routeId === undefined) return acc;

                                if (!acc.includes(curr.routeId)) {
                                    acc.push(curr.routeId);
                                }

                                return acc;
                            }, [] as number[]);
                            possibleSeats.forEach((seat) => {
                                const clearedRouteIds: number[] = [];

                                route.ticket?.forEach((ticket) => {
                                    if (ticket.routeId === null || ticket.routeId === undefined) return;

                                    if (ticket.seatType === seat) {
                                        if (!clearedRouteIds.includes(ticket.routeId)) {
                                            clearedRouteIds.push(ticket.routeId);
                                        }
                                    }
                                });

                                if (clearedRouteIds.length === uniqueRouteIds.length) {
                                    availableSeats.push(seat);
                                }
                            });

                            return (
                                <div
                                    key={route.id}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',

                                        height: '120px',

                                        padding: '0 0.5rem',

                                        border: selectedRouteId === route.id ? '2px solid #000' : 'none',
                                        borderRadius: selectedRouteId === route.id ? '0.25rem' : 'none',
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '2rem',

                                            height: '100px',
                                        }}
                                    >
                                        {selectedRouteId === route.id ? (
                                            <Checkbox
                                                checked
                                                onChange={clearSelectedRoute}
                                            />
                                        ) : null}

                                        {/* Departs */}
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <Text color={COLOR_PALETTE.light.default.textColorSecondary}>Departs</Text>
                                            <Title
                                                order={1}
                                                weight={'normal'}
                                            >
                                                {departureTimeFormatted}
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
                                                        <Text>{trainSwaps}</Text>
                                                        <IoMdTrain />
                                                    </ActionIcon>
                                                </Tooltip>
                                            </div>

                                            <BlackArrow />

                                            {/* Trip Duration */}
                                            <Text>{tripDuration}</Text>
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
                                                {arrivalTimeFormatted}
                                            </Title>
                                        </div>
                                    </div>

                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '2rem',

                                            height: '100px',
                                        }}
                                    >
                                        {selectedSeat !== undefined && selectedRouteId === route.id ? (
                                            renderSelectedSeatButton(index, trainSwaps)
                                        ) : (
                                            <>
                                                {/* Coach */}
                                                {availableSeats.includes(SeatType.COACH) && (
                                                    <SeatSelectButton
                                                        seatType={SeatType.COACH}
                                                        seatPrice={SeatPrice.COACH * trainSwaps}
                                                        onClick={() => updateSelectedRoute(index, SeatType.COACH)}
                                                    />
                                                )}

                                                {/* First Class */}
                                                {availableSeats.includes(SeatType.FIRST_CLASS) && (
                                                    <SeatSelectButton
                                                        seatType={SeatType.FIRST_CLASS}
                                                        seatPrice={SeatPrice.FIRST_CLASS * trainSwaps}
                                                        onClick={() => updateSelectedRoute(index, SeatType.FIRST_CLASS)}
                                                    />
                                                )}

                                                {/* Sleeper */}
                                                {availableSeats.includes(SeatType.SLEEPER) && (
                                                    <SeatSelectButton
                                                        seatType={SeatType.SLEEPER}
                                                        seatPrice={SeatPrice.SLEEPER * trainSwaps}
                                                        onClick={() => updateSelectedRoute(index, SeatType.SLEEPER)}
                                                    />
                                                )}

                                                {/* Roomlet */}
                                                {availableSeats.includes(SeatType.ROOMLET) && (
                                                    <SeatSelectButton
                                                        seatType={SeatType.ROOMLET}
                                                        seatPrice={SeatPrice.ROOMLET * trainSwaps}
                                                        onClick={() => updateSelectedRoute(index, SeatType.ROOMLET)}
                                                    />
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Accordion.Panel>
            </Accordion.Item>
        </Accordion>
    );
}
