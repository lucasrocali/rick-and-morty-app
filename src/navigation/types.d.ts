import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Launch: undefined;
  Login: undefined;
  MainTab: NavigatorScreenParams<MainTabParamList>;
  Base: undefined;
};

export type CharactersStackParamList = {
  Characters: undefined;
  Character: {
    id: number;
  };
};

export type LocationsStackParamList = {
  Locations: undefined;
};

export type EpisodesStackParamList = {
  Episodes: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
};

/*
{
  Launch: Launch;
  Login: Login;
  MainTab: {
    CharactersStack: {
      Characters: Characters;
      Character: Character;
    }
    LocationsStack: {
      Locations: Locations;
    }
    EpisodesStack: {
      Episodes: Episodes;
    }
    ProfileStack: {
      Profile: Profile;
    }
  };
}
*/

export type MainTabParamList = {
  CharactersStack: NavigatorScreenParams<CharactersStackParamList>;
  LocationsStack: NavigatorScreenParams<LocationsStackParamList>;
  EpisodesStack: NavigatorScreenParams<EpisodesStackParamList>;
  ProfileStack: NavigatorScreenParams<ProfileStackParamList>;
};
