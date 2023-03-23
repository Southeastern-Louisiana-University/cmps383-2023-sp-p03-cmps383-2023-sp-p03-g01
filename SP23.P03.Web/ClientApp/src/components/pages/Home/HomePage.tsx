import { Button, NumberInput, Paper, Select } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useViewportSize } from '@mantine/hooks';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../models/AppRoutes';
import { getMantineComponentSize } from '../../../util/getMantineComponentSize';
import { TrainStationSelect } from '../../reusable/TrainStationSelect/TrainStationSelect';
import { HOME_PAGE_STYLING } from './HomePageStyling';

/**
 * The home page of the app.
 */
export function HomePage(): React.ReactElement {
  const navigate = useNavigate();
  const { width: browserWidth } = useViewportSize();
  const componentSize = getMantineComponentSize(browserWidth);

  const [selectedTrainStation, setSelectedTrainStation] = useState<string | null>(null);

  const updateSelectedTrainStation = (value: string | null) => {
    setSelectedTrainStation(value);
  };

  const navigateToRoutePlanningPage = () => {
    navigate(AppRoutes.ROUTE_PLANNING);
  };

  return (
    <div style={HOME_PAGE_STYLING.rootStyles}>
      <div style={HOME_PAGE_STYLING.rootContentStyles}>
        <Paper shadow="lg" style={HOME_PAGE_STYLING.paperStyles}>
          <Select style={HOME_PAGE_STYLING.paperContentStyles} size={componentSize} data={[]} label="Trip Type:" />
          <NumberInput style={HOME_PAGE_STYLING.paperContentStyles} size={componentSize} label="Passengers:" />

          <Select style={HOME_PAGE_STYLING.paperContentStyles} size={componentSize} data={[]} label="Leaving From:" />
          <TrainStationSelect style={HOME_PAGE_STYLING.paperContentStyles} label="Going To:" value={selectedTrainStation} setValue={updateSelectedTrainStation} />

          <DateInput style={HOME_PAGE_STYLING.paperContentStyles} size={componentSize} label="Leaving When?" />
          <DateInput style={HOME_PAGE_STYLING.paperContentStyles} size={componentSize} label="Returning When?" />

          {selectedTrainStation !== null && (
            <Button style={HOME_PAGE_STYLING.paperContentStyles} size={componentSize} onClick={navigateToRoutePlanningPage}>
              Find A Route
            </Button>
          )}
        </Paper>
      </div>
    </div>
  );
}
