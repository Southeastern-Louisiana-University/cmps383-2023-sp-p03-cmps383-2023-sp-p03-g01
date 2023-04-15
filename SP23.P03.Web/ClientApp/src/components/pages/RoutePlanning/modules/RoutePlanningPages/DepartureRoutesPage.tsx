import React from 'react';
import { ROUTE_PLANNING_PAGE_STYLING } from '../../RoutePlanningPageRootStyling';
import { Accordion, Checkbox, Table } from '@mantine/core';
import { useRecoilValue } from 'recoil';
import { departureStationState, arrivalStationState } from '../../../../../recoil/atoms/HomePageAtom';
import { formatNumberAsUSD } from '../../../../../util/formatNumberAsUSD';

/**
 * The first step in the route planning process.
 */
export function DepartureRoutesPage(): React.ReactElement {
    const selectedDepartureStation = useRecoilValue(departureStationState);
    const selectedArrivalStation = useRecoilValue(arrivalStationState);

    const tStyle1 = {
        style: ROUTE_PLANNING_PAGE_STYLING.trainRouteAccordionControlStyles,
    };
    const tStyle2 = {
        style: { ...ROUTE_PLANNING_PAGE_STYLING.trainRouteAccordionControlStyles, color: 'white' },
    };

    return (
        <div>
            <Accordion defaultValue='Departure Route'>
                <Accordion.Item value='Departure Route'>
                    <Accordion.Control>
                        {selectedDepartureStation} to {selectedArrivalStation}
                    </Accordion.Control>
                    <Accordion.Panel>
                        <div style={ROUTE_PLANNING_PAGE_STYLING.parentAccordionPanelStyles}>
                            {/* Train 1 */}
                            <div style={ROUTE_PLANNING_PAGE_STYLING.trainRouteRowStyles}>
                                <Checkbox />

                                <Accordion defaultValue='train 1'>
                                    <Accordion.Item value='train 1'>
                                        <Accordion.Control>
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th {...tStyle2}>Departure Time</th>
                                                        <th {...tStyle2}>Final Arrival Time</th>
                                                        <th {...tStyle2}>Trip Duration</th>
                                                        <th {...tStyle2}>Total Stops</th>
                                                        <th {...tStyle2}>Cost (USD)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td {...tStyle2}>8:00 AM CDT</td>
                                                        <td {...tStyle2}>3:00 PM CDT</td>
                                                        <td {...tStyle2}>7 hours</td>
                                                        <td {...tStyle2}>5</td>
                                                        <td {...tStyle2}>{formatNumberAsUSD(156)}</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th {...tStyle1}>Stop</th>
                                                        <th {...tStyle1}>Departure Time</th>
                                                        <th {...tStyle1}>Departure Station</th>
                                                        <th {...tStyle1}>Arrival Time</th>
                                                        <th {...tStyle1}>Arrival Station</th>
                                                        <th {...tStyle1}>Dwell Time</th>
                                                        <th {...tStyle1}>Layover</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td {...tStyle1}>1</td>
                                                        <td {...tStyle1}>8:00 AM CDT</td>
                                                        <td {...tStyle1}>Baton Rouge, LA</td>
                                                        <td {...tStyle1}>9:18 AM CDT</td>
                                                        <td {...tStyle1}>New Orleans, LA</td>
                                                        <td {...tStyle1}>15 minutes</td>
                                                        <td {...tStyle1}>None</td>
                                                    </tr>
                                                    <tr>
                                                        <td {...tStyle1}>2</td>
                                                        <td {...tStyle1}>9:33 AM CDT</td>
                                                        <td {...tStyle1}>New Orleans, LA</td>
                                                        <td {...tStyle1}>10:51 AM CDT</td>
                                                        <td {...tStyle1}>Schriever, LA</td>
                                                        <td {...tStyle1}>None</td>
                                                        <td {...tStyle1}>30 minutes</td>
                                                    </tr>
                                                    <tr>
                                                        <td {...tStyle1}>3</td>
                                                        <td {...tStyle1}>11:21 AM CDT</td>
                                                        <td {...tStyle1}>Schriever, LA</td>
                                                        <td {...tStyle1}>12:39 PM CDT</td>
                                                        <td {...tStyle1}>New Iberia, LA</td>
                                                        <td {...tStyle1}>15 minutes</td>
                                                        <td {...tStyle1}>None</td>
                                                    </tr>
                                                    <tr>
                                                        <td {...tStyle1}>4</td>
                                                        <td {...tStyle1}>12:54 PM CDT</td>
                                                        <td {...tStyle1}>New Iberia, LA</td>
                                                        <td {...tStyle1}>2:12 PM CDT</td>
                                                        <td {...tStyle1}>Lafayette, LA</td>
                                                        <td {...tStyle1}>None</td>
                                                        <td {...tStyle1}>30 minutes</td>
                                                    </tr>
                                                    <tr>
                                                        <td {...tStyle1}>5</td>
                                                        <td {...tStyle1}>2:42 PM CDT</td>
                                                        <td {...tStyle1}>Lafayette, LA</td>
                                                        <td {...tStyle1}>3:00 PM CDT</td>
                                                        <td {...tStyle1}>Lake Charles, LA</td>
                                                        <td {...tStyle1}>None</td>
                                                        <td {...tStyle1}>None</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            {/* Train 2 */}
                            <div style={ROUTE_PLANNING_PAGE_STYLING.trainRouteRowStyles}>
                                <Checkbox />

                                <Accordion defaultValue='train 2'>
                                    <Accordion.Item value='train 2'>
                                        <Accordion.Control>
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th {...tStyle2}>Departure Time</th>
                                                        <th {...tStyle2}>Final Arrival Time</th>
                                                        <th {...tStyle2}>Trip Duration</th>
                                                        <th {...tStyle2}>Total Stops</th>
                                                        <th {...tStyle2}>Cost (USD)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td {...tStyle2}>10:00 AM CDT</td>
                                                        <td {...tStyle2}>5:00 PM CDT</td>
                                                        <td {...tStyle2}>7 hours</td>
                                                        <td {...tStyle2}>5</td>
                                                        <td {...tStyle2}>{formatNumberAsUSD(156)}</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th {...tStyle1}>Stop</th>
                                                        <th {...tStyle1}>Departure Time</th>
                                                        <th {...tStyle1}>Departure Station</th>
                                                        <th {...tStyle1}>Arrival Time</th>
                                                        <th {...tStyle1}>Arrival Station</th>
                                                        <th {...tStyle1}>Dwell Time</th>
                                                        <th {...tStyle1}>Layover</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td {...tStyle1}>1</td>
                                                        <td {...tStyle1}>10:00 AM CDT</td>
                                                        <td {...tStyle1}>Baton Rouge, LA</td>
                                                        <td {...tStyle1}>11:18 AM CDT</td>
                                                        <td {...tStyle1}>New Orleans, LA</td>
                                                        <td {...tStyle1}>15min</td>
                                                        <td {...tStyle1}>None</td>
                                                    </tr>
                                                    <tr>
                                                        <td {...tStyle1}>2</td>
                                                        <td {...tStyle1}>11:33 AM CDT</td>
                                                        <td {...tStyle1}>New Orleans, LA</td>
                                                        <td {...tStyle1}>12:51 PM CDT</td>
                                                        <td {...tStyle1}>Schriever, LA</td>
                                                        <td {...tStyle1}>None</td>
                                                        <td {...tStyle1}>30min</td>
                                                    </tr>
                                                    <tr>
                                                        <td {...tStyle1}>3</td>
                                                        <td {...tStyle1}>1:21 PM CDT</td>
                                                        <td {...tStyle1}>Schriever, LA</td>
                                                        <td {...tStyle1}>2:39 PM CDT</td>
                                                        <td {...tStyle1}>New Iberia, LA</td>
                                                        <td {...tStyle1}>15min</td>
                                                        <td {...tStyle1}>None</td>
                                                    </tr>
                                                    <tr>
                                                        <td {...tStyle1}>4</td>
                                                        <td {...tStyle1}>2:54 PM CDT</td>
                                                        <td {...tStyle1}>New Iberia, LA</td>
                                                        <td {...tStyle1}>4:12 PM CDT</td>
                                                        <td {...tStyle1}>Lafayette, LA</td>
                                                        <td {...tStyle1}>None</td>
                                                        <td {...tStyle1}>30min</td>
                                                    </tr>
                                                    <tr>
                                                        <td {...tStyle1}>5</td>
                                                        <td {...tStyle1}>4:42 PM CDT</td>
                                                        <td {...tStyle1}>Lafayette, LA</td>
                                                        <td {...tStyle1}>5:00 PM CDT</td>
                                                        <td {...tStyle1}>Lake Charles, LA</td>
                                                        <td {...tStyle1}>None</td>
                                                        <td {...tStyle1}>None</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}
