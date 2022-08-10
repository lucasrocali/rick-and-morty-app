import React from 'react';
import styled from 'styled-components/native';
import NavHeader from 'src/components/NavHeader';
import EpisodeCell from 'src/components/EpisodeCell';
import { StackScreen } from 'src/components/Screen';
import { t } from 'src/utils/i18n';
import { Episode } from 'src/data/models/episode';

const Container = styled(StackScreen)``;

const FlatList = styled.FlatList``;

interface EpisodesLayoutProps {
  episodes: Episode[];
  onGoBack: () => void;
}

export default function EpisodesLayout({
  episodes,
  onGoBack,
}: EpisodesLayoutProps) {
  const renderItem = ({ item: episode }: { item: Episode }) => (
    <EpisodeCell episode={episode} />
  );

  return (
    <Container>
      <NavHeader title={t('episodes')} onGoBack={onGoBack} />
      <FlatList<React.ElementType>
        data={episodes}
        renderItem={renderItem}
        keyExtractor={(episode: Episode) => episode.id}
      />
    </Container>
  );
}
