import React from 'react';
import styled from 'styled-components/native';
import { Episode } from 'src/data/models/episode';

const Container = styled.View`
  padding: 20px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.color.gray.c500};
`;

const Text = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.inter.regular};
  color: ${({ theme }) => theme.color.gray.c900};
  font-size: 16px;
`;

interface EpisodeCellProps {
  episode: Episode;
}

export default function EpisodeCell({ episode }: EpisodeCellProps) {
  return (
    <Container>
      <Text>{episode.name}</Text>
      <Text>{episode.air_date}</Text>
      <Text>{episode.episode}</Text>
    </Container>
  );
}
