import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  useNavigation /*, useRoute, RouteProp*/,
} from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import LocationsLayout from './layout';

type LocationsNavProp = NativeStackNavigationProp<RootStackParamList, 'Locations'>;

// type LocationsRouteProp = RouteProp<RootStackParamList, 'Locations'>;

export default function Locations() {
  const navigation = useNavigation<LocationsNavProp>();
  // const {
  //   params: { someParam },
  // } = useRoute<LocationsRouteProp>();

  return <LocationsLayout onGoBack={() => navigation.goBack()} />;
}
