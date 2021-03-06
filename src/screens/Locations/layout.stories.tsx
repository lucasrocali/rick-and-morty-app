import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import { LOCATION_1, LOCATION_2, LOCATION_3 } from 'src/data/mocks';
import LocationsLayout from './layout';

export const actions = {
  onGoBack: action('onGoBack'),
};
storiesOf('screens/Locations', module).add('default', () => (
  <LocationsLayout
    locations={[LOCATION_1, LOCATION_2, LOCATION_3]}
    {...actions}
  />
));
