import { axiosInstance, PaginatedResponse } from '../api';
import { Episode } from '../models/episode';

//getEpisodes
export interface EpisodesVar {
  page: number;
}

export type EpisodesData = PaginatedResponse<Episode>;

export async function getEpisodes({
  page,
}: EpisodesVar): Promise<EpisodesData> {
  const { data } = await axiosInstance.get<EpisodesData>(
    `/episode?page=${page}`,
  );
  return data;
}
