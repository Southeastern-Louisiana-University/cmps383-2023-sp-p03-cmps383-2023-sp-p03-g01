import { Accordion, Avatar, Button, Card, Checkbox, Stepper, Table } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React, { useState } from 'react';
import { getMantineComponentSize } from '../../../util/getMantineComponentSize';
import { ROUTE_PLANNING_PAGE_STYLING } from './RoutePlanningPageStyling';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsArrowLeftRight, BsPersonFill } from 'react-icons/bs';
import { useRecoilValue } from 'recoil';
import {
  enteredPassengerCountState,
  selectedArrivalStationState,
  selectedDepartureDateState,
  selectedDepartureStationState,
  selectedReturnDateState,
  selectedTripTypeState,
} from '../../../recoil/atoms/HomePageAtom';
import { TripType } from '../../../models/TripTypes';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../models/AppRoutes';
import { GrStripe } from 'react-icons/gr';
import { STYLING_VARIABLES } from '../../../styling/StylingVariables';
import { COLOR_PALETTE } from '../../../styling/ColorPalette';

/**
 * The main page for route planning.
 */
export function RoutePlanningPage(): React.ReactElement {
  const navigate = useNavigate();
  const { width: browserWidth } = useViewportSize();
  const componentSize = getMantineComponentSize(browserWidth);

  const selectedTripType = useRecoilValue(selectedTripTypeState);
  const enteredPassengerCount = useRecoilValue(enteredPassengerCountState);
  const selectedDepartureStation = useRecoilValue(selectedDepartureStationState);
  const selectedArrivalStation = useRecoilValue(selectedArrivalStationState);
  const selectedDepartureDate = useRecoilValue(selectedDepartureDateState);
  const selectedReturnDate = useRecoilValue(selectedReturnDateState);

  // Format the dates as Month Day, Year
  const formattedDepartureDate = selectedDepartureDate
    ? selectedDepartureDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : 'ERROR';
  const formattedReturnDate = selectedReturnDate
    ? selectedReturnDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : 'ERROR';

  const [currentStep, setCurrentStep] = useState<0 | 1 | 2>(0);

  /* const routePlanningIsAllowed =
    selectedDepartureStation === '' ||
    selectedArrivalStation === '' ||
    selectedDepartureDate === null ||
    selectedReturnDate === null; */

  const tStyle1 = {
    style: ROUTE_PLANNING_PAGE_STYLING.trainRouteAccordionControlStyles,
  };
  const tStyle2 = {
    style: { ...ROUTE_PLANNING_PAGE_STYLING.trainRouteAccordionControlStyles, color: 'white' },
  };

  const determineArrowIcon = (): React.ReactElement => {
    switch (selectedTripType) {
      case TripType.ONE_WAY:
        return <AiOutlineArrowRight />;
      case TripType.ROUND_TRIP:
        return <BsArrowLeftRight />;
      case TripType.MULTI_CITY:
        return <AiOutlineArrowRight />;
    }
  };

  const navigateToHome = (): void => {
    navigate(AppRoutes.HOME);
  };

  return (
    <div style={ROUTE_PLANNING_PAGE_STYLING.rootStyles}>
      <div style={ROUTE_PLANNING_PAGE_STYLING.headerStyles}>
        <Stepper active={currentStep}>
          <Stepper.Step
            label='Choose Your Routes'
            description='How would you like to get there?'
          >
            <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentStyles}>
              {/* Trip Destinations */}
              <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentBlockStyles}>
                <span>{selectedDepartureStation}</span>

                <Avatar size='md'>{determineArrowIcon()}</Avatar>

                <span>{selectedArrivalStation}</span>
              </div>

              {/* Passenger Count */}
              <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentBlockStyles}>
                <span>{enteredPassengerCount}</span>

                <Avatar
                  size='md'
                  radius='xl'
                >
                  <BsPersonFill />
                </Avatar>
              </div>

              {/* Trip Dates */}
              <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentBlockStyles}>
                <span>{formattedDepartureDate}</span>
                <span>|</span>
                <span>{formattedReturnDate}</span>
              </div>
            </div>
          </Stepper.Step>
          <Stepper.Step
            label='Select Your Seats'
            description='Feeling first class?'
          >
            <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentStyles}>
              {/* Trip Destinations */}
              <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentBlockStyles}>
                <span>{selectedDepartureStation}</span>

                <Avatar size='md'>{determineArrowIcon()}</Avatar>

                <span>{selectedArrivalStation}</span>
              </div>

              {/* Passenger Count */}
              <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentBlockStyles}>
                <span>{enteredPassengerCount}</span>

                <Avatar
                  size='md'
                  radius='xl'
                >
                  <BsPersonFill />
                </Avatar>
              </div>

              {/* Trip Dates */}
              <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentBlockStyles}>
                <span>{formattedDepartureDate}</span>
                <span>|</span>
                <span>{formattedReturnDate}</span>
              </div>
            </div>
          </Stepper.Step>
          <Stepper.Step
            label='Review & Pay'
            description='Keeping the lights on.'
          >
            <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentStyles}>
              {/* Trip Destinations */}
              <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentBlockStyles}>
                <span>{selectedDepartureStation}</span>

                <Avatar size='md'>{determineArrowIcon()}</Avatar>

                <span>{selectedArrivalStation}</span>
              </div>

              {/* Passenger Count */}
              <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentBlockStyles}>
                <span>{enteredPassengerCount}</span>

                <Avatar
                  size='md'
                  radius='xl'
                >
                  <BsPersonFill />
                </Avatar>
              </div>

              {/* Trip Dates */}
              <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentBlockStyles}>
                <span>{formattedDepartureDate}</span>
                <span>|</span>
                <span>{formattedReturnDate}</span>
              </div>
            </div>
          </Stepper.Step>
        </Stepper>
      </div>

      <div style={ROUTE_PLANNING_PAGE_STYLING.contentStyles}>
        {/* Departure Route */}
        {currentStep === 0 && (
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
                                <th {...tStyle2}>Total Stops</th>
                                <th {...tStyle2}>Estimated Minimum Cost (USD)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td {...tStyle2}>8:00 AM CDT</td>
                                <td {...tStyle2}>3:00 PM CDT</td>
                                <td {...tStyle2}>5</td>
                                <td {...tStyle2}>$152</td>
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
                                <td {...tStyle2}>$152</td>
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
        )}

        {/* Seat Selection Page */}
        {currentStep === 1 && (
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
                              <th {...tStyle2}>Model</th>
                              <th {...tStyle2}>Departure Time</th>
                              <th {...tStyle2}>Departure Station</th>
                              <th {...tStyle2}>Arrival Time</th>
                              <th {...tStyle2}>Arrival Station</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td {...tStyle2}>Siemens Charger</td>
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
                            label='Coach (52$)'
                          />
                          <Checkbox
                            size={componentSize}
                            label='First Class (72$)'
                          />
                          <Checkbox
                            size={componentSize}
                            label='Sleeper (92$)'
                          />
                          <Checkbox
                            size={componentSize}
                            label='Roomlet (120$)'
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
                              <th {...tStyle2}>Model</th>
                              <th {...tStyle2}>Departure Time</th>
                              <th {...tStyle2}>Departure Station</th>
                              <th {...tStyle2}>Arrival Time</th>
                              <th {...tStyle2}>Arrival Station</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td {...tStyle2}>Siemens Charger</td>
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
                            label='Coach (52$)'
                          />
                          <Checkbox
                            size={componentSize}
                            label='First Class (72$)'
                          />
                          <Checkbox
                            size={componentSize}
                            label='Sleeper (92$)'
                          />
                          <Checkbox
                            size={componentSize}
                            label='Roomlet (120$)'
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
                              <th {...tStyle2}>Model</th>
                              <th {...tStyle2}>Departure Time</th>
                              <th {...tStyle2}>Departure Station</th>
                              <th {...tStyle2}>Arrival Time</th>
                              <th {...tStyle2}>Arrival Station</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td {...tStyle2}>Siemens Charger</td>
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
                            label='Coach (52$)'
                          />
                          <Checkbox
                            size={componentSize}
                            label='First Class (72$)'
                          />
                          <Checkbox
                            size={componentSize}
                            label='Sleeper (92$)'
                          />
                          <Checkbox
                            size={componentSize}
                            label='Roomlet (120$)'
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
        {currentStep === 2 && (
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
                        <li>Model: Siemens Charger</li>
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
                      <span>1 Coach (52$)</span>
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
                        <li>Model: Siemens Charger</li>
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
                      <span>1 Coach (52$)</span>
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
                        <li>Model: Siemens Charger</li>
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
                      <span>1 Coach (52$)</span>
                    </Card.Section>
                  </Card>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        )}
      </div>

      {/* Departure Route Buttons */}
      {currentStep === 0 && (
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
              setCurrentStep(1);
            }}
          >
            Continue to Seat Selection <AiOutlineArrowRight style={{ marginLeft: STYLING_VARIABLES.defaultSpacing }} />
          </Button>
        </div>
      )}

      {/* Seat Selection Page Buttons */}
      {currentStep === 1 && (
        <div style={ROUTE_PLANNING_PAGE_STYLING.footerStyles}>
          <Button
            size={componentSize}
            onClick={() => {
              setCurrentStep(0);
            }}
          >
            <AiOutlineArrowLeft style={{ marginRight: STYLING_VARIABLES.defaultSpacing }} /> Back to Route Selection
          </Button>

          <Button
            size={componentSize}
            onClick={() => {
              setCurrentStep(2);
            }}
          >
            Continue to Review & Pay <AiOutlineArrowRight style={{ marginLeft: STYLING_VARIABLES.defaultSpacing }} />
          </Button>
        </div>
      )}

      {/* Review & Pay Buttons */}
      {currentStep === 2 && (
        <div style={ROUTE_PLANNING_PAGE_STYLING.footerStyles}>
          <Button
            size={componentSize}
            onClick={() => {
              setCurrentStep(1);
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
