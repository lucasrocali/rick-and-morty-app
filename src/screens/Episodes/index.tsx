import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  useNavigation /*, useRoute, RouteProp*/,
} from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import EpisodesLayout from './layout';

type EpisodesNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'Episodes'
>;

// type EpisodesRouteProp = RouteProp<RootStackParamList, 'Episodes'>;

export default function Episodes() {
  const navigation = useNavigation<EpisodesNavProp>();
  // const {
  //   params: { someParam },
  // } = useRoute<EpisodesRouteProp>();

  return <EpisodesLayout episodes={[]} onGoBack={() => navigation.goBack()} />;
}
