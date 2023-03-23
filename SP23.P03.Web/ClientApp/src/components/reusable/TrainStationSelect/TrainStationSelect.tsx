import { Select } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React from 'react';
import { TRAIN_STATIONS } from '../../../models/tempFillerData/trainStations';
import { getMantineComponentSize } from '../../../util/getMantineComponentSize';

interface TrainStationSelectProps {
  style?: React.CSSProperties;
  label: string;
  value: string | null;
  setValue: (value: string | null) => void;
}
/**
 * Reusable component for selecting an existing train station.
 *
 * @param props
 * @param props.label The label for the select component.
 * @param props.value The currently selected value.
 * @param props.setValue The function to call when the value changes.
 */
export function TrainStationSelect({ style, label, value, setValue }: TrainStationSelectProps): React.ReactElement {
  const { width: browserWidth } = useViewportSize();
  const componentSize = getMantineComponentSize(browserWidth);

  const data = TRAIN_STATIONS.map((station) => {
    return {
      value: station.name,
      label: `${station.name} | ${station.city}, ${station.state}`,
      group: station.state,
    };
  });

  return <Select style={style} data={data} value={value} onChange={setValue} label={label} size={componentSize} searchable clearable nothingFound="No options" />;
}
