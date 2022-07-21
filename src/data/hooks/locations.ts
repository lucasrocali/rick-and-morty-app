import { AxiosError } from 'axios';
import { useInfiniteQuery, UseInfiniteQueryOptions } from 'react-query';
import { getLocations, LocationsData } from '../operations/locations';

//useLocationsQuery
type LocationsQueryOptions = {
  options?: Omit<
    UseInfiniteQueryOptions<LocationsData, AxiosError>,
    'queryKey' | 'queryFn'
  >;
};

export function useLocationsQuery({
  options = {
    getNextPageParam: (lastPage) => {
      const nextUrl = lastPage.info.next;
      if (nextUrl) {
        return Number(nextUrl.charAt(nextUrl.length - 1));
      }
      return false;
    },
  },
}: LocationsQueryOptions) {
  return useInfiniteQuery(
    ['locations'],
    ({ pageParam = 1 }) => getLocations({ page: pageParam }),
    options,
  );
}
