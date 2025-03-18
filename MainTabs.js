// MainTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ExplorerScreen from './screens/ExplorerScreen';
import AccountScreen from './screens/AccountScreen';

const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Explorer') {
          iconName = 'compass-outline';
        } else if (route.name === 'Account') {
          iconName = 'person-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#FF6347',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Explorer" component={ExplorerScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

export default MainTabs;
