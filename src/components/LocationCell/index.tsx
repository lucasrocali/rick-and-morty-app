import React from 'react';
import styled from 'styled-components/native';
import { Location } from 'src/data/models/location';

const Container = styled.View`
  padding: 20px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.color.gray.c500};
`;

const NameText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.inter.bold};
  color: ${({ theme }) => theme.color.gray.c900};
  font-size: 18px;
`;

const InfoText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.inter.regular};
  color: ${({ theme }) => theme.color.gray.c900};
  font-size: 16px;
`;

interface LocationCellProps {
  location: Location;
}

export default function LocationCell({ location }: LocationCellProps) {
  return (
    <Container>
      <NameText>{location.name}</NameText>
      <InfoText>{location.type}</InfoText>
      <InfoText>{location.dimension}</InfoText>
    </Container>
  );
}
