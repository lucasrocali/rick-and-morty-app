import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';
import Icon from 'src/components/Icon';
import Character from 'src/screens/Character';
import Characters from 'src/screens/Characters';
import Launch from 'src/screens/Launch';
import Locations from 'src/screens/Locations';
import Login from 'src/screens/Login';
import Profile from 'src/screens/Profile';
import {
  RootStackParamList,
  MainTabParamList,
  CharactersStackParamList,
  ProfileStackParamList,
  LocationsStackParamList,
  EpisodesStackParamList,
} from './types';
import Episodes from 'src/screens/Episodes';

const BottomTabNavigator = createBottomTabNavigator<MainTabParamList>();

const CharactersStackNavigator =
  createNativeStackNavigator<CharactersStackParamList>();

const LocationsStackNavigator =
  createNativeStackNavigator<LocationsStackParamList>();

const ProfileStackNavigator =
  createNativeStackNavigator<ProfileStackParamList>();

const EpisodesStackNavigator =
  createNativeStackNavigator<EpisodesStackParamList>();

function CharactersStack(): JSX.Element {
  return (
    <CharactersStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <CharactersStackNavigator.Screen
        name={'Characters'}
        component={Characters}
      />
      <CharactersStackNavigator.Screen
        name={'Character'}
        component={Character}
      />
    </CharactersStackNavigator.Navigator>
  );
}

function LocationsStack(): JSX.Element {
  return (
    <LocationsStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <LocationsStackNavigator.Screen
        name={'Locations'}
        component={Locations}
      />
    </LocationsStackNavigator.Navigator>
  );
}

function EpisodesStack(): JSX.Element {
  return (
    <EpisodesStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <EpisodesStackNavigator.Screen name={'Episodes'} component={Episodes} />
    </EpisodesStackNavigator.Navigator>
  );
}

function ProfileStack(): JSX.Element {
  return (
    <ProfileStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStackNavigator.Screen name={'Profile'} component={Profile} />
    </ProfileStackNavigator.Navigator>
  );
}

function MainTab(): JSX.Element {
  const theme = useTheme();
  return (
    <BottomTabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          return (
            <Icon
              name={route.name === 'CharactersStack' ? 'list' : 'home'}
              color={color}
            />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: theme.color.primary.c500,
        tabBarInactiveTintColor: theme.color.gray.c600,
        tabBarStyle: {
          backgroundColor: theme.color.gray.c25,
        },
      })}
    >
      <BottomTabNavigator.Screen
        name={'CharactersStack'}
        component={CharactersStack}
      />
      <BottomTabNavigator.Screen
        name={'LocationsStack'}
        component={LocationsStack}
      />
      <BottomTabNavigator.Screen
        name={'EpisodesStack'}
        component={EpisodesStack}
      />
      <BottomTabNavigator.Screen
        name={'ProfileStack'}
        component={ProfileStack}
      />
    </BottomTabNavigator.Navigator>
  );
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigation(): JSX.Element {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Screen name={'Launch'} component={Launch} />
        <RootStack.Screen
          name={'Login'}
          component={Login}
          options={{
            animation: 'slide_from_bottom',
          }}
        />
        <RootStack.Screen
          name={'MainTab'}
          component={MainTab}
          options={{
            animation: 'slide_from_bottom',
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
