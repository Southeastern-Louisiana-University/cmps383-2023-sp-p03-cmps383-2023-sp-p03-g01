import { Accordion, Button, Card, Checkbox, Table } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React from 'react';
import { getMantineComponentSize } from '../../../util/getMantineComponentSize';
import { ROUTE_PLANNING_PAGE_STYLING } from './RoutePlanningPageRootStyling';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedArrivalStationState, selectedDepartureStationState } from '../../../recoil/atoms/HomePageAtom';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../models/AppRoutes';
import { GrStripe } from 'react-icons/gr';
import { STYLING_VARIABLES } from '../../../styling/StylingVariables';
import { COLOR_PALETTE } from '../../../styling/ColorPalette';
import { RoutePlanningStepper } from './modules/RoutePlanningStepper';
import { currentRoutePlanningPageState } from '../../../recoil/atoms/RoutePlanningAtom';
import { RoutePlanningPage } from '../../../models/RoutePlanningPages';

/**
 * The main page for route planning.
 */
export function RoutePlanningPageRoot(): React.ReactElement {
  const navigate = useNavigate();
  const { width: browserWidth } = useViewportSize();
  const componentSize = getMantineComponentSize(browserWidth);

  const selectedDepartureStation = useRecoilValue(selectedDepartureStationState);
  const selectedArrivalStation = useRecoilValue(selectedArrivalStationState);
  const [currentRoutePlanningPage, setCurrentRoutePlanningPage] = useRecoilState(currentRoutePlanningPageState);

  const tStyle1 = {
    style: ROUTE_PLANNING_PAGE_STYLING.trainRouteAccordionControlStyles,
  };
  const tStyle2 = {
    style: { ...ROUTE_PLANNING_PAGE_STYLING.trainRouteAccordionControlStyles, color: 'white' },
  };

  const navigateToHome = (): void => {
    navigate(AppRoutes.HOME);
  };

  const formatNumber = (num: number): string => {
    return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
  };

  return (
    <div style={ROUTE_PLANNING_PAGE_STYLING.rootStyles}>
      <RoutePlanningStepper />

      <div style={ROUTE_PLANNING_PAGE_STYLING.contentStyles}>
        {/* Departure Route */}
        {currentRoutePlanningPage === RoutePlanningPage.DEPARTURE_ROUTE && (
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
                                <td {...tStyle2}>{formatNumber(156)}</td>
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
                                <td {...tStyle2}>{formatNumber(156)}</td>
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
        )}

        {/* Seat Selection Page */}
        {currentRoutePlanningPage === RoutePlanningPage.SEAT_SELECTION && (
          <Accordion defaultValue='Departure Route'>
            <Accordion.Item value='Departure Route'>
              <Accordion.Control>
                {selectedDepartureStation} to {selectedArrivalStation}
              </Accordion.Control>
              <Accordion.Panel>
                <div style={ROUTE_PLANNING_PAGE_STYLING.parentAccordionPanelStyles}>
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
                            label={`Coach (${formatNumber(52)})`}
                          />
                          <Checkbox
                            size={componentSize}
                            label={`First Class (${formatNumber(72)})`}
                          />
                          <Checkbox
                            size={componentSize}
                            label={`Sleeper (${formatNumber(92)})`}
                          />
                          <Checkbox
                            size={componentSize}
                            label={`Roomlet (${formatNumber(120)})`}
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
                            label={`Coach (${formatNumber(52)})`}
                          />
                          <Checkbox
                            size={componentSize}
                            label={`First Class (${formatNumber(72)})`}
                          />
                          <Checkbox
                            size={componentSize}
                            label={`Sleeper (${formatNumber(92)})`}
                          />
                          <Checkbox
                            size={componentSize}
                            label={`Roomlet (${formatNumber(120)})`}
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
                            label={`Coach (${formatNumber(52)})`}
                          />
                          <Checkbox
                            size={componentSize}
                            label={`First Class (${formatNumber(72)})`}
                          />
                          <Checkbox
                            size={componentSize}
                            label={`Sleeper (${formatNumber(92)})`}
                          />
                          <Checkbox
                            size={componentSize}
                            label={`Roomlet (${formatNumber(120)})`}
                          />
                        </div>
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        )}

        {/* Review & Pay */}
        {currentRoutePlanningPage === RoutePlanningPage.REVIEW_AND_PAY && (
          <Accordion defaultValue='Departure Route'>
            <Accordion.Item value='Departure Route'>
              <Accordion.Control>
                {selectedDepartureStation} to {selectedArrivalStation} (156$)
              </Accordion.Control>

              <Accordion.Panel>
                <div style={ROUTE_PLANNING_PAGE_STYLING.reviewPageAccordionPanelStyles}>
                  {/* Train 1 */}
                  <Card
                    withBorder
                    style={{ width: '500px' }}
                    padding='sm'
                  >
                    <Card.Section
                      withBorder
                      style={{
                        backgroundColor: COLOR_PALETTE.light.default.blueNcs,
                        color: 'white',
                        fontSize: STYLING_VARIABLES.defaultBodyFontSize,
                      }}
                      inheritPadding
                    >
                      Baton Rouge, LA to Schriever, LA
                    </Card.Section>

                    <Card.Section
                      withBorder
                      style={{ fontSize: STYLING_VARIABLES.defaultBodyFontSize }}
                      inheritPadding
                    >
                      <ul>
                        <li>Departure Time: 9:00 AM CDT</li>
                        <li>Duration: 1hr 51min</li>
                        <li>Arrival Time: 10:51 AM CDT</li>
                      </ul>
                    </Card.Section>

                    <Card.Section
                      withBorder
                      style={{ fontSize: STYLING_VARIABLES.defaultBodyFontSize }}
                      inheritPadding
                    >
                      <span>1 Coach ({formatNumber(52)})</span>
                    </Card.Section>
                  </Card>

                  {/* Train 2 */}
                  <Card
                    withBorder
                    style={{ width: '500px' }}
                  >
                    <Card.Section
                      withBorder
                      style={{
                        backgroundColor: COLOR_PALETTE.light.default.blueNcs,
                        color: 'white',
                        fontSize: STYLING_VARIABLES.defaultBodyFontSize,
                      }}
                      inheritPadding
                    >
                      Schriever, LA to Lafayette, LA
                    </Card.Section>

                    <Card.Section
                      withBorder
                      style={{ fontSize: STYLING_VARIABLES.defaultBodyFontSize }}
                      inheritPadding
                    >
                      <ul>
                        <li>Departure Time: 11:21 AM CDT</li>
                        <li>Duration: 2hr 51min</li>
                        <li>Arrival Time: 2:12 PM CDT</li>
                      </ul>
                    </Card.Section>

                    <Card.Section
                      withBorder
                      style={{ fontSize: STYLING_VARIABLES.defaultBodyFontSize }}
                      inheritPadding
                    >
                      <span>1 Coach ({formatNumber(52)})</span>
                    </Card.Section>
                  </Card>

                  {/* Train 3 */}
                  <Card
                    withBorder
                    style={{ width: '500px' }}
                  >
                    <Card.Section
                      withBorder
                      style={{
                        backgroundColor: COLOR_PALETTE.light.default.blueNcs,
                        color: 'white',
                        fontSize: STYLING_VARIABLES.defaultBodyFontSize,
                      }}
                      inheritPadding
                    >
                      Lafayette, LA to Lake Charles, LA
                    </Card.Section>

                    <Card.Section
                      withBorder
                      style={{ fontSize: STYLING_VARIABLES.defaultBodyFontSize }}
                      inheritPadding
                    >
                      <ul>
                        <li>Departure Time: 2:42 PM CDT</li>
                        <li>Duration: 18min</li>
                        <li>Arrival Time: 3:00 PM CDT</li>
                      </ul>
                    </Card.Section>

                    <Card.Section
                      withBorder
                      style={{ fontSize: STYLING_VARIABLES.defaultBodyFontSize }}
                      inheritPadding
                    >
                      <span>1 Coach ({formatNumber(52)})</span>
                    </Card.Section>
                  </Card>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        )}
      </div>

      {/* Departure Route Buttons */}
      {currentRoutePlanningPage === RoutePlanningPage.DEPARTURE_ROUTE && (
        <div style={ROUTE_PLANNING_PAGE_STYLING.footerStyles}>
          <Button
            size={componentSize}
            onClick={navigateToHome}
          >
            <AiOutlineArrowLeft style={{ marginRight: STYLING_VARIABLES.defaultSpacing }} /> Back to Home Page
          </Button>

          <Button
            size={componentSize}
            onClick={() => {
              setCurrentRoutePlanningPage(RoutePlanningPage.SEAT_SELECTION);
            }}
          >
            Continue to Seat Selection <AiOutlineArrowRight style={{ marginLeft: STYLING_VARIABLES.defaultSpacing }} />
          </Button>
        </div>
      )}

      {/* Seat Selection Page Buttons */}
      {currentRoutePlanningPage === RoutePlanningPage.SEAT_SELECTION && (
        <div style={ROUTE_PLANNING_PAGE_STYLING.footerStyles}>
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
            Continue to Review & Pay <AiOutlineArrowRight style={{ marginLeft: STYLING_VARIABLES.defaultSpacing }} />
          </Button>
        </div>
      )}

      {/* Review & Pay Buttons */}
      {currentRoutePlanningPage === RoutePlanningPage.REVIEW_AND_PAY && (
        <div style={ROUTE_PLANNING_PAGE_STYLING.footerStyles}>
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
        </div>
      )}

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
