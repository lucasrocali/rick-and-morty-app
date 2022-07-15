import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
// import { action } from '@storybook/addon-actions';
import styled from 'styled-components/native';
import LocationCell from './';
import { LOCATION_1, LOCATION_2, LOCATION_3 } from 'src/data/mocks';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.gray.c25};
`;

export const actions = {
  // onPress: action('onPress'),
};
storiesOf('components/LocationCell', module).add('default', () => (
  <Container>
    <LocationCell location={LOCATION_1} {...actions} />
    <LocationCell location={LOCATION_2} {...actions} />
    <LocationCell location={LOCATION_3} {...actions} />
  </Container>
));
