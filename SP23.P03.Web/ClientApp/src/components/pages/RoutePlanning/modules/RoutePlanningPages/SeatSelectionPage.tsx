import React from 'react';
import { ROUTE_PLANNING_PAGE_STYLING } from '../../RoutePlanningPageRootStyling';
import { Accordion, Table, Checkbox } from '@mantine/core';
import { useRecoilValue } from 'recoil';
import { departureStationState, arrivalStationState } from '../../../../../recoil/atoms/HomePageAtom';
import { useViewportSize } from '@mantine/hooks';
import { getMantineComponentSize } from '../../../../../util/getMantineComponentSize';
import { formatNumberAsUSD } from '../../../../../util/formatNumberAsUSD';

/**
 * The second step in the route planning process.
 */
export function SeatSelectionPage(): React.ReactElement {
    const { width: browserWidth } = useViewportSize();
    const componentSize = getMantineComponentSize(browserWidth);

    const selectedDepartureStation = useRecoilValue(departureStationState);
    const selectedArrivalStation = useRecoilValue(arrivalStationState);

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
                        <div /* style={ROUTE_PLANNING_PAGE_STYLING.parentAccordionPanelStyles} */>
                            {/* Train 1 */}
                            <Accordion defaultValue='train 1'>
                                <Accordion.Item value='train 1'>
                                    <Accordion.Control>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th {...tStyle2}>Departure Time</th>
                                                    <th {...tStyle2}>Departure Station</th>
                                                    <th {...tStyle2}>Arrival Time</th>
                                                    <th {...tStyle2}>Arrival Station</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td {...tStyle2}>8:00 AM CDT</td>
                                                    <td {...tStyle2}>Baton Rouge, LA</td>
                                                    <td {...tStyle2}>10:51 AM CDT</td>
                                                    <td {...tStyle2}>Schriever, LA</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Accordion.Control>
                                    <Accordion.Panel>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Checkbox
                                                size={componentSize}
                                                label={`Coach (${formatNumberAsUSD(52)})`}
                                            />
                                            <Checkbox
                                                size={componentSize}
                                                label={`First Class (${formatNumberAsUSD(72)})`}
                                            />
                                            <Checkbox
                                                size={componentSize}
                                                label={`Sleeper (${formatNumberAsUSD(92)})`}
                                            />
                                            <Checkbox
                                                size={componentSize}
                                                label={`Roomlet (${formatNumberAsUSD(120)})`}
                                            />
                                        </div>
                                    </Accordion.Panel>
                                </Accordion.Item>
                            </Accordion>

                            {/* Train 2 */}
                            <Accordion defaultValue='train 2'>
                                <Accordion.Item value='train 2'>
                                    <Accordion.Control>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th {...tStyle2}>Departure Time</th>
                                                    <th {...tStyle2}>Departure Station</th>
                                                    <th {...tStyle2}>Arrival Time</th>
                                                    <th {...tStyle2}>Arrival Station</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td {...tStyle2}>11:21 AM CDT</td>
                                                    <td {...tStyle2}>Schriever, LA</td>
                                                    <td {...tStyle2}>2:12 PM CDT</td>
                                                    <td {...tStyle2}>Lafayette, LA</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Accordion.Control>
                                    <Accordion.Panel>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Checkbox
                                                size={componentSize}
                                                label={`Coach (${formatNumberAsUSD(52)})`}
                                            />
                                            <Checkbox
                                                size={componentSize}
                                                label={`First Class (${formatNumberAsUSD(72)})`}
                                            />
                                            <Checkbox
                                                size={componentSize}
                                                label={`Sleeper (${formatNumberAsUSD(92)})`}
                                            />
                                            <Checkbox
                                                size={componentSize}
                                                label={`Roomlet (${formatNumberAsUSD(120)})`}
                                            />
                                        </div>
                                    </Accordion.Panel>
                                </Accordion.Item>
                            </Accordion>

                            {/* Train 3 */}
                            <Accordion defaultValue='train 3'>
                                <Accordion.Item value='train 3'>
                                    <Accordion.Control>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th {...tStyle2}>Departure Time</th>
                                                    <th {...tStyle2}>Departure Station</th>
                                                    <th {...tStyle2}>Arrival Time</th>
                                                    <th {...tStyle2}>Arrival Station</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td {...tStyle2}>2:42 PM CDT</td>
                                                    <td {...tStyle2}>Lafayette, LA</td>
                                                    <td {...tStyle2}>3:00 PM CDT</td>
                                                    <td {...tStyle2}>Lake Charles, LA</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Accordion.Control>
                                    <Accordion.Panel>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Checkbox
                                                size={componentSize}
                                                label={`Coach (${formatNumberAsUSD(52)})`}
                                            />
                                            <Checkbox
                                                size={componentSize}
                                                label={`First Class (${formatNumberAsUSD(72)})`}
                                            />
                                            <Checkbox
                                                size={componentSize}
                                                label={`Sleeper (${formatNumberAsUSD(92)})`}
                                            />
                                            <Checkbox
                                                size={componentSize}
                                                label={`Roomlet (${formatNumberAsUSD(120)})`}
                                            />
                                        </div>
                                    </Accordion.Panel>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}
