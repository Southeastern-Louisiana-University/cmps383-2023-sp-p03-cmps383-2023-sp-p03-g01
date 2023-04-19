import { Accordion, Card } from '@mantine/core';
import React from 'react';
import { COLOR_PALETTE } from '../../../../../styling/ColorPalette';
import { STYLING_VARIABLES } from '../../../../../styling/StylingVariables';
import { ROUTE_PLANNING_PAGE_STYLING } from '../../RoutePlanningPageRootStyling';
import { formatNumberAsUSD } from '../../../../../util/formatNumberAsUSD';
import { useRecoilValue } from 'recoil';
import { selectedDepartureStationState, selectedArrivalStationState } from '../../../../../recoil/atoms/HomePageAtom';

/**
 * The final screen in the route planning process.
 */
export function ReviewAndPayPage(): React.ReactElement {
  const selectedDepartureStation = useRecoilValue(selectedDepartureStationState);
  const selectedArrivalStation = useRecoilValue(selectedArrivalStationState);

  return (
    <div>
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
                  <span>1 Coach ({formatNumberAsUSD(52)})</span>
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
                  <span>1 Coach ({formatNumberAsUSD(52)})</span>
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
                  <span>1 Coach ({formatNumberAsUSD(52)})</span>
                </Card.Section>
              </Card>
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
