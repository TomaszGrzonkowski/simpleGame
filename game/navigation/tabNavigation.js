import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import WelcomeScreen from '../screens/WelcomeScreen';
import GameScreen from '../screens/GameScreen';

const ICON_SIZE = 20;

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          tabBarLabel: 'WELCOME',
          tabBarIcon: () => <Icon name="information" size={ICON_SIZE} />,
        }}
      />
      <Tab.Screen
        name="Game"
        component={GameScreen}
        options={{
          tabBarLabel: 'GAME',
          tabBarIcon: () => (
            <Icon name="gamepad-variant-outline" size={ICON_SIZE} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
