import React from 'react';
import {
  useNavigation /*, useRoute, RouteProp*/,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LOCATION_1 } from 'src/data/mocks';
import { LocationsStackParamList } from 'src/navigation/types';
import LocationsLayout from './layout';

type LocationsNavProp = NativeStackNavigationProp<
  LocationsStackParamList,
  'Locations'
>;

// type LocationsRouteProp = RouteProp<RootStackParamList, 'Locations'>;

export default function Locations() {
  const navigation = useNavigation<LocationsNavProp>();
  // const {
  //   params: { someParam },
  // } = useRoute<LocationsRouteProp>();

  return (
    <LocationsLayout
      locations={[LOCATION_1]}
      onGoBack={() => navigation.goBack()}
    />
  );
}
