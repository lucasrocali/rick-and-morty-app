import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  useNavigation /*, useRoute, RouteProp*/,
} from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import EpisodesLayout from './layout';
import { useQuery } from 'react-query';
import { getEpisodes } from 'src/data/operations/episodes';

type EpisodesNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'Episodes'
>;

// type EpisodesRouteProp = RouteProp<RootStackParamList, 'Episodes'>;

export default function Episodes() {
  const navigation = useNavigation<EpisodesNavProp>();
  const { data } = useQuery(['episodes'], () => getEpisodes({ page: 1 }));

  const episodes = data?.results || [];
  // const {
  //   params: { someParam },
  // } = useRoute<EpisodesRouteProp>();

  return (
    <EpisodesLayout episodes={episodes} onGoBack={() => navigation.goBack()} />
  );
}
