import { Accordion, Button, Checkbox, Table } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React from 'react';
import { getMantineComponentSize } from '../../../util/getMantineComponentSize';
import { ROUTE_PLANNING_PAGE_STYLING } from './RoutePlanningPageStyling';

/**
 * The main page for route planning.
 */
export function RoutePlanningPage(): React.ReactElement {
  const { width: browserWidth } = useViewportSize();
  const componentSize = getMantineComponentSize(browserWidth);

  const tStyle1 = {
    style: ROUTE_PLANNING_PAGE_STYLING.trainRouteAccordionControlStyles,
  };
  const tStyle2 = {
    style: { ...ROUTE_PLANNING_PAGE_STYLING.trainRouteAccordionControlStyles, color: 'white' },
  };

  const departStation = 'Baton Rouge, LA';
  const arriveStation = 'Lake Charles, LA';

  return (
    <div style={ROUTE_PLANNING_PAGE_STYLING.rootStyles}>
      <div style={ROUTE_PLANNING_PAGE_STYLING.headerStyles}>
        <span>Select a Route For Your Trip</span>
      </div>

      <div style={ROUTE_PLANNING_PAGE_STYLING.contentStyles}>
        {/* Departure Route */}
        <Accordion defaultValue='Departure Route'>
          <Accordion.Item value='Departure Route'>
            <Accordion.Control>
              {departStation} to {arriveStation}
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
                              <th {...tStyle2}>Total Stops</th>
                              <th {...tStyle2}>Estimated Minimum Cost (USD)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td {...tStyle2}>8:00 AM CDT</td>
                              <td {...tStyle2}>3:00 PM CDT</td>
                              <td {...tStyle2}>5</td>
                              <td {...tStyle2}>$50.00</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Table>
                          <thead>
                            <tr>
                              <th {...tStyle1}>Stop</th>
                              <th {...tStyle1}>Model</th>
                              <th {...tStyle1}>Departure Time</th>
                              <th {...tStyle1}>Departure Station</th>
                              <th {...tStyle1}>Arrival Time</th>
                              <th {...tStyle1}>Arrival Station</th>
                              <th {...tStyle1}>Layover</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td {...tStyle1}>1</td>
                              <td {...tStyle1}>Siemens Charger</td>
                              <td {...tStyle1}>8:00 AM CDT</td>
                              <td {...tStyle1}>Baton Rouge, LA</td>
                              <td {...tStyle1}>9:18 AM CDT</td>
                              <td {...tStyle1}>New Orleans, LA</td>
                              <td {...tStyle1}>15 minutes</td>
                            </tr>
                            <tr>
                              <td {...tStyle1}>2</td>
                              <td {...tStyle1}>Siemens Charger</td>
                              <td {...tStyle1}>9:33 AM CDT</td>
                              <td {...tStyle1}>New Orleans, LA</td>
                              <td {...tStyle1}>10:51 AM CDT</td>
                              <td {...tStyle1}>Schriever, LA</td>
                              <td {...tStyle1}>30 minutes</td>
                            </tr>
                            <tr>
                              <td {...tStyle1}>3</td>
                              <td {...tStyle1}>Siemens Charger</td>
                              <td {...tStyle1}>11:21 AM CDT</td>
                              <td {...tStyle1}>Schriever, LA</td>
                              <td {...tStyle1}>12:39 PM CDT</td>
                              <td {...tStyle1}>New Iberia, LA</td>
                              <td {...tStyle1}>15 minutes</td>
                            </tr>
                            <tr>
                              <td {...tStyle1}>4</td>
                              <td {...tStyle1}>Siemens Charger</td>
                              <td {...tStyle1}>12:54 PM CDT</td>
                              <td {...tStyle1}>New Iberia, LA</td>
                              <td {...tStyle1}>2:12 PM CDT</td>
                              <td {...tStyle1}>Lafayette, LA</td>
                              <td {...tStyle1}>30 minutes</td>
                            </tr>
                            <tr>
                              <td {...tStyle1}>5</td>
                              <td {...tStyle1}>Siemens Charger</td>
                              <td {...tStyle1}>2:42 PM CDT</td>
                              <td {...tStyle1}>Lafayette, LA</td>
                              <td {...tStyle1}>3:00 PM CDT</td>
                              <td {...tStyle1}>Lake Charles, LA</td>
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
                              <th {...tStyle2}>Total Stops</th>
                              <th {...tStyle2}>Estimated Minimum Cost (USD)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td {...tStyle2}>10:00 AM CDT</td>
                              <td {...tStyle2}>5:00 PM CDT</td>
                              <td {...tStyle2}>5</td>
                              <td {...tStyle2}>$50.00</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Table>
                          <thead>
                            <tr>
                              <th {...tStyle1}>Stop</th>
                              <th {...tStyle1}>Model</th>
                              <th {...tStyle1}>Departure Time</th>
                              <th {...tStyle1}>Departure Station</th>
                              <th {...tStyle1}>Arrival Time</th>
                              <th {...tStyle1}>Arrival Station</th>
                              <th {...tStyle1}>Layover</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td {...tStyle1}>1</td>
                              <td {...tStyle1}>Siemens Charger</td>
                              <td {...tStyle1}>10:00 AM CDT</td>
                              <td {...tStyle1}>Baton Rouge, LA</td>
                              <td {...tStyle1}>11:18 AM CDT</td>
                              <td {...tStyle1}>New Orleans, LA</td>
                              <td {...tStyle1}>15 minutes</td>
                            </tr>
                            <tr>
                              <td {...tStyle1}>2</td>
                              <td {...tStyle1}>Siemens Charger</td>
                              <td {...tStyle1}>11:33 AM CDT</td>
                              <td {...tStyle1}>New Orleans, LA</td>
                              <td {...tStyle1}>12:51 PM CDT</td>
                              <td {...tStyle1}>Schriever, LA</td>
                              <td {...tStyle1}>30 minutes</td>
                            </tr>
                            <tr>
                              <td {...tStyle1}>3</td>
                              <td {...tStyle1}>Siemens Charger</td>
                              <td {...tStyle1}>1:21 PM CDT</td>
                              <td {...tStyle1}>Schriever, LA</td>
                              <td {...tStyle1}>2:39 PM CDT</td>
                              <td {...tStyle1}>New Iberia, LA</td>
                              <td {...tStyle1}>15 minutes</td>
                            </tr>
                            <tr>
                              <td {...tStyle1}>4</td>
                              <td {...tStyle1}>Siemens Charger</td>
                              <td {...tStyle1}>2:54 PM CDT</td>
                              <td {...tStyle1}>New Iberia, LA</td>
                              <td {...tStyle1}>4:12 PM CDT</td>
                              <td {...tStyle1}>Lafayette, LA</td>
                              <td {...tStyle1}>30 minutes</td>
                            </tr>
                            <tr>
                              <td {...tStyle1}>5</td>
                              <td {...tStyle1}>Siemens Charger</td>
                              <td {...tStyle1}>4:42 PM CDT</td>
                              <td {...tStyle1}>Lafayette, LA</td>
                              <td {...tStyle1}>5:00 PM CDT</td>
                              <td {...tStyle1}>Lake Charles, LA</td>
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

        {/* Return Route */}
        <Accordion defaultValue='Return Route'>
          <Accordion.Item value='Return Route'>
            <Accordion.Control>
              {arriveStation} to {departStation}
            </Accordion.Control>
            <Accordion.Panel>Bam</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>

      <div>
        <Button size={componentSize}>Continue to Seat Selection</Button>
      </div>

      {/* This is a placeholder that launches the Stripe payment */}
      {/* <form
        action='/api/payment/create-checkout-session'
        method='POST'
      >
        <Button type='submit'>Checkout</Button>
      </form> */}
    </div>
  );
}
