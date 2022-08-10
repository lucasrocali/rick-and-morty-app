import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import EpisodesLayout from './layout';
import { EPISODE_1, EPISODE_2, EPISODE_3 } from 'src/data/mocks';

storiesOf('screens/Episodes', module).add('default', () => (
  <EpisodesLayout
    episodes={[EPISODE_1, EPISODE_2, EPISODE_3]}
    onGoBack={action('onGoBack')}
  />
));
