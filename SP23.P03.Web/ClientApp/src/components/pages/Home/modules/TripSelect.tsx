import { Select } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React from 'react';
import { useRecoilState } from 'recoil';
import { TripType } from '../../../../models/TripTypes';
import { tripTypeState } from '../../../../recoil/atoms/HomePageAtom';
import { getMantineComponentSize } from '../../../../util/getMantineComponentSize';
import { HOME_PAGE_STYLING } from '../HomePageStyling';

/**
 * The select for the trip type.
 */
export function TripSelect(): React.ReactElement {
    const { width: browserWidth } = useViewportSize();
    const componentSize = getMantineComponentSize(browserWidth);

    const data = Object.keys(TripType).map((key) => TripType[key as keyof typeof TripType]);

    const [selectedTripType, setSelectedTripType] = useRecoilState(tripTypeState);

    const updateSelectedTripType = (value: string) => {
        setSelectedTripType(value as TripType);
    };

    return (
        <Select
            style={HOME_PAGE_STYLING.paperContentStyles}
            size={componentSize}
            data={data}
            value={selectedTripType}
            onChange={updateSelectedTripType}
            label='Trip Type:'
            withAsterisk
        />
    );
}
