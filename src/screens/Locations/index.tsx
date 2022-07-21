import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useLocationsQuery } from 'src/data/hooks/locations';
import { LocationsStackParamList } from 'src/navigation/types';
import LocationsLayout from './layout';

type LocationsNavProp = NativeStackNavigationProp<
  LocationsStackParamList,
  'Locations'
>;

export default function Locations() {
  const navigation = useNavigation<LocationsNavProp>();

  const { data } = useLocationsQuery({});

  const locations =
    data?.pages
      .map((page) => page.results || [])
      .reduce((arr, subarr) => arr.concat(subarr), []) || [];

  return (
    <LocationsLayout
      locations={locations}
      onGoBack={() => navigation.goBack()}
    />
  );
}
