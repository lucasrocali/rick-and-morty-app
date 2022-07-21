import { axiosInstance, PaginatedResponse } from '../api';
import { Location } from '../models/location';

//getLocations
export interface LocationsVar {
  page: number;
}

export type LocationsData = PaginatedResponse<Location>;

export async function getLocations({ page }: LocationsVar) {
  const { data } = await axiosInstance.get<LocationsData>(
    `/location/?page=${page}`,
  );
  return data;
}
