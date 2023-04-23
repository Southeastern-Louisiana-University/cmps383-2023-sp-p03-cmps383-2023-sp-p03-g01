import React from 'react';
import { Accordion, Flex, Stack, Text } from '@mantine/core';
import { BiRun } from 'react-icons/bi';
import { TicketSummary } from '../../../../../common/TicketSummary';
import { SelectedRoute } from '../../../../../../recoil/atoms/RoutePlanningAtom';
import dayjs from 'dayjs';
import { useRecoilValue } from 'recoil';
import { passengerCountState } from '../../../../../../recoil/atoms/HomePageAtom';
import { SeatPrice, SeatType } from '../../../../../../models/SeatTypes';
import arrow from '../../../../../../media/arrow.svg';
import { BsHourglassSplit } from 'react-icons/bs';

interface TicketSummaryAccordionItemProps {
    data: SelectedRoute;
}
/**
 * The Accordion that displays all tickets on a route.
 *
 * @param props
 * @param props.data Data to display
 */
export function TicketSummaryAccordionItem({ data }: TicketSummaryAccordionItemProps): React.ReactElement {
    const passengerCount = useRecoilValue(passengerCountState);

    const getSeatCost = (seat: SeatType): SeatPrice => {
        switch (seat) {
            case SeatType.COACH:
                return SeatPrice.COACH;
            case SeatType.FIRST_CLASS:
                return SeatPrice.FIRST_CLASS;
            case SeatType.ROOMLET:
                return SeatPrice.ROOMLET;
            case SeatType.SLEEPER:
                return SeatPrice.SLEEPER;
        }
    };

    return (
        <Accordion defaultValue='Departure Route'>
            <Accordion.Item value='Departure Route'>
                <Accordion.Control>
                    {data.route.departureStation} to {data.route.arrivalStation}
                </Accordion.Control>

                <Accordion.Panel>
                    <Stack align='center'>
                        {data.route.routes
                            ? data.route.routes.map((route, index) => {
                                  const departureTime = dayjs(route.departureTime);
                                  const departureTimeFormatted = departureTime.format('h:mm A');

                                  const arrivalTime = dayjs(route.arrivalTime);
                                  const arrivalTimeFormatted = arrivalTime.format('h:mm A');

                                  // Calculate total travel time
                                  const totalTravelTime = arrivalTime.diff(departureTime, 'minute');
                                  const hours = Math.floor(totalTravelTime / 60);
                                  const minutes = totalTravelTime % 60;
                                  const tripDuration = `${hours}hr ${minutes}min`;

                                  return (
                                      <Stack
                                          key={route.departureStation + route.arrivalStation}
                                          align='center'
                                      >
                                          <TicketSummary
                                              key={route.id}
                                              departureStation={route.departureStation}
                                              arrivalStation={route.arrivalStation}
                                              departureTime={departureTimeFormatted}
                                              arrivalTime={arrivalTimeFormatted}
                                              duration={tripDuration}
                                              layover={route.layover ? route.layover : null}
                                              seat={data.seat}
                                              cost={getSeatCost(data.seat)}
                                              passengerCount={passengerCount}
                                          />

                                          {index !== data.route.routes!.length - 1 && (
                                              <Flex
                                                  gap='0.5rem'
                                                  justify='center'
                                                  style={{ width: '100%', height: '100px' }}
                                              >
                                                  <img
                                                      style={{
                                                          transform: 'rotate(90deg)',
                                                          width: '100px',
                                                      }}
                                                      src={arrow}
                                                      alt='black arrow'
                                                  />

                                                  {route.layover && (
                                                      <Flex
                                                          align='center'
                                                          gap='0.5rem'
                                                          style={{ width: '100px' }}
                                                      >
                                                          <Text weight='bold'>{route.layover}</Text>
                                                          <BiRun />
                                                      </Flex>
                                                  )}
                                                  {route.dwellTime && (
                                                      <Flex
                                                          align='center'
                                                          gap='0.5rem'
                                                          style={{ width: '100px' }}
                                                      >
                                                          <Text weight='bold'>{route.dwellTime}</Text>
                                                          <BsHourglassSplit />
                                                      </Flex>
                                                  )}
                                              </Flex>
                                          )}
                                      </Stack>
                                  );
                              })
                            : null}
                    </Stack>
                </Accordion.Panel>
            </Accordion.Item>
        </Accordion>
    );
}
