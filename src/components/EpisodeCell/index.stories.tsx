import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
// import { action } from '@storybook/addon-actions';
import styled from 'styled-components/native';
import { EPISODE_1, EPISODE_2, EPISODE_3 } from 'src/data/mocks';
import EpisodeCell from './';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.gray.c25};
`;

storiesOf('components/EpisodeCell', module).add('default', () => (
  <Container>
    <EpisodeCell episode={EPISODE_1} />
    <EpisodeCell episode={EPISODE_2} />
    <EpisodeCell episode={EPISODE_3} />
  </Container>
));
