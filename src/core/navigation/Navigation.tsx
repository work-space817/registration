import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNames} from './types';
import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import IntroductionScreen from '../screens/auth/introduction/IntroductionScreen';
import LoginScreen from '../screens/auth/login/LoginScreen';
import RegisterScreen from '../screens/auth/register/RegisterScreen';
import VerifyScreen from '../screens/auth/verify/VerifyScreen';
import HomeScreen from '../screens/home/HomeScreen';

const Stack = createNativeStackNavigator();

type ScreenNamesType = keyof typeof ScreenNames;
export type RootStackParamList = Record<ScreenNamesType[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenNames.IntroductionScreen}>
        <Stack.Group
          screenOptions={{
            animation: 'fade',
            headerShown: false,
          }}>
          <Stack.Screen
            name={ScreenNames.IntroductionScreen}
            component={IntroductionScreen}
          />
          <Stack.Screen
            name={ScreenNames.RegisterScreen}
            component={RegisterScreen}
          />
          <Stack.Screen
            name={ScreenNames.LoginScreen}
            component={LoginScreen}
          />
          <Stack.Screen
            name={ScreenNames.VerifyScreen}
            component={VerifyScreen}
          />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            animation: 'fade',
          }}>
          <Stack.Screen name={ScreenNames.HomeScreen} component={HomeScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
