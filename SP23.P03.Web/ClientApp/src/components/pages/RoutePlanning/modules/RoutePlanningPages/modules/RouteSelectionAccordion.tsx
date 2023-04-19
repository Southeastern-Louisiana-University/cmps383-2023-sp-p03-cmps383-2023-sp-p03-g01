import { Accordion, Title, Tooltip, ActionIcon, Text, Checkbox } from '@mantine/core';
import React, { useState } from 'react';
import { IoMdTrain } from 'react-icons/io';
import { BlackArrow } from '../../../../../../media/BlackArrow';
import { COLOR_PALETTE } from '../../../../../../styling/ColorPalette';
import { formatNumberAsUSD } from '../../../../../../util/formatNumberAsUSD';
import { SeatType } from '../../../../../../models/SeatTypes';

interface SeatSelectButtonProps {
    seatType: SeatType;
    seatPrice: number;
    onClick: () => void;
}
const SeatSelectButton = ({ seatPrice, seatType, onClick }: SeatSelectButtonProps): React.ReactElement => {
    const getBackgroundColor = (): string => {
        switch (seatType) {
            case SeatType.COACH:
                return COLOR_PALETTE.light.default.coachSeatButtonBackground;
            case SeatType.FIRST_CLASS:
                return COLOR_PALETTE.light.default.firstClassSeatButtonBackground;
            case SeatType.SLEEPER:
                return COLOR_PALETTE.light.default.sleeperSeatButtonBackground;
            case SeatType.ROOMLET:
                return COLOR_PALETTE.light.default.roomletSeatButtonBackground;
        }
    };

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

                backgroundColor: getBackgroundColor(),
            }}
            onMouseEnter={(e) => {
                // change cursor to pointer
                e.currentTarget.style.cursor = 'pointer';

                // change background color
                e.currentTarget.style.backgroundColor = getHoverBackgroundColor();
            }}
            onMouseLeave={(e) => {
                // change background color
                e.currentTarget.style.backgroundColor = getBackgroundColor();
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
    departureStation: string;
    arrivalStation: string;
    scheduledRoutes: {
        departureTime: string;
        arrivalTime: string;
        tripDuration: string;
        trainSwaps: number;
    }[];
}
/**
 * Selecting routes & seats.
 */
export function RouteSelectionAccordion({
    departureStation,
    arrivalStation,
    scheduledRoutes,
}: RouteSelectionAccordionProps): React.ReactElement {
    const [selectedRoute, setSelectedRoute] = useState<number | undefined>(undefined);
    const [selectedSeat, setSelectedSeat] = useState<SeatType | undefined>(undefined);

    const clearSelectedRoute = (): void => {
        setSelectedRoute(undefined);
        setSelectedSeat(undefined);
    };

    const updateSelectedRoute = (index: number, seat: SeatType): void => {
        setSelectedRoute(index);
        setSelectedSeat(seat);
    };

    const renderSelectedSeatButton = (index: number): React.ReactElement => {
        if (selectedSeat === undefined) return <></>;

        switch (selectedSeat) {
            case SeatType.COACH:
                return (
                    <SeatSelectButton
                        seatType={SeatType.COACH}
                        seatPrice={156}
                        onClick={() => updateSelectedRoute(index, SeatType.COACH)}
                    />
                );
            case SeatType.FIRST_CLASS:
                return (
                    <SeatSelectButton
                        seatType={SeatType.FIRST_CLASS}
                        seatPrice={206}
                        onClick={() => updateSelectedRoute(index, SeatType.FIRST_CLASS)}
                    />
                );
            case SeatType.SLEEPER:
                return (
                    <SeatSelectButton
                        seatType={SeatType.SLEEPER}
                        seatPrice={256}
                        onClick={() => updateSelectedRoute(index, SeatType.SLEEPER)}
                    />
                );

            case SeatType.ROOMLET:
                return (
                    <SeatSelectButton
                        seatType={SeatType.ROOMLET}
                        seatPrice={314}
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
                    {departureStation} to {arrivalStation}
                </Accordion.Control>
                <Accordion.Panel>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {scheduledRoutes.map((route, index) => {
                            return (
                                <div
                                    key={index}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',

                                        height: '120px',

                                        padding: '0 0.5rem',

                                        border: selectedRoute === index ? '2px solid #000' : 'none',
                                        borderRadius: selectedRoute === index ? '0.25rem' : 'none',
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
                                        {selectedRoute === index ? (
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
                                                {route.departureTime}
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
                                                        <Text>{route.trainSwaps}</Text>
                                                        <IoMdTrain />
                                                    </ActionIcon>
                                                </Tooltip>
                                            </div>

                                            <BlackArrow />

                                            {/* Trip Duration */}
                                            <Text>{route.tripDuration}</Text>
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
                                                {route.arrivalTime}
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
                                        {selectedSeat !== undefined && selectedRoute === index ? (
                                            renderSelectedSeatButton(index)
                                        ) : (
                                            <>
                                                {/* Coach */}
                                                <SeatSelectButton
                                                    seatType={SeatType.COACH}
                                                    seatPrice={156}
                                                    onClick={() => updateSelectedRoute(index, SeatType.COACH)}
                                                />

                                                {/* First Class */}
                                                <SeatSelectButton
                                                    seatType={SeatType.FIRST_CLASS}
                                                    seatPrice={206}
                                                    onClick={() => updateSelectedRoute(index, SeatType.FIRST_CLASS)}
                                                />

                                                {/* Sleeper */}
                                                <SeatSelectButton
                                                    seatType={SeatType.SLEEPER}
                                                    seatPrice={256}
                                                    onClick={() => updateSelectedRoute(index, SeatType.SLEEPER)}
                                                />

                                                {/* Roomlet */}
                                                <SeatSelectButton
                                                    seatType={SeatType.ROOMLET}
                                                    seatPrice={314}
                                                    onClick={() => updateSelectedRoute(index, SeatType.ROOMLET)}
                                                />
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
