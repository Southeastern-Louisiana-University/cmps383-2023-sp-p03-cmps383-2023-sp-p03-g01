import { Button, Paper } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React, { useState } from 'react';
import { getMantineComponentSize } from '../../../util/getMantineComponentSize';
import { TrainStationSelect } from '../../reusable/TrainStationSelect/TrainStationSelect';
import { HOME_PAGE_STYLING } from './HomePageStyling';

/**
 * The home page of the app.
 */
export function HomePage(): React.ReactElement {
  const { width: browserWidth } = useViewportSize();
  const componentSize = getMantineComponentSize(browserWidth);

  const [selectedTrainStation, setSelectedTrainStation] = useState<string | null>(null);

  const updateSelectedTrainStation = (value: string | null) => {
    setSelectedTrainStation(value);
  };

  return (
    <div style={HOME_PAGE_STYLING.rootStyles}>
      <div style={HOME_PAGE_STYLING.rootContentStyles}>
        <Paper shadow="lg" style={HOME_PAGE_STYLING.paperStyles}>
          <TrainStationSelect label="Where do you want to go?" value={selectedTrainStation} setValue={updateSelectedTrainStation} />
          {selectedTrainStation !== null && <Button size={componentSize}>Find A Route</Button>}
        </Paper>
      </div>
    </div>
  );
}
