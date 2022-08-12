import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import EpisodesLayout from './layout';
import { EPISODE_LIST } from 'src/data/mocks';

storiesOf('screens/Episodes', module).add('default', () => (
  <EpisodesLayout episodes={EPISODE_LIST} onGoBack={action('onGoBack')} />
));
