import React from 'react';
import styled from 'styled-components/native';
import LocationCell from 'src/components/LocationCell';
import NavHeader from 'src/components/NavHeader';
import { StackScreen } from 'src/components/Screen';
import { Location } from 'src/data/models/location';
import { t } from 'src/utils/i18n';

const Container = styled(StackScreen)``;

const FlatList = styled.FlatList``;

interface LocationsLayoutProps {
  locations: Location[];
  onGoBack: () => void;
}

export default function LocationsLayout({ locations }: LocationsLayoutProps) {
  const renderItem = ({ item: location }: { item: Location }) => {
    return <LocationCell location={location} />;
  };

  return (
    <Container>
      <NavHeader title={t('locations')} />
      <FlatList<React.ElementType>
        data={locations}
        renderItem={renderItem}
        keyExtractor={(location: Location) => `l_${location.id}`}
      />
    </Container>
  );
}
