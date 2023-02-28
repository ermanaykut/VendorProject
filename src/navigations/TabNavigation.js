import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from '../screens/CartScreen';
import CustomTabBar from '../components/CustomTabBar';
import CategoryScreen from '../screens/CategoryScreen';
import {colors} from '../constants/colors';

const Tab = createBottomTabNavigator();

function TabNavigation({route}) {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.lemon,
            borderBottomWidth: 1,
            borderBottomColor: colors.dodgerblue,
          },
          title: 'All Categories',
          headerTitleStyle: {color: colors.dodgerblue},
        }}
        initialParams={{iconName: 'layer-group: FontAwe5', ...route?.params}}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.babypink,
            borderBottomWidth: 1,
            borderBottomColor: colors.lemon,
          },
          title: 'Cart',
          headerTitleStyle: {color: colors.lemon},
        }}
        initialParams={{iconName: 'shopping-cart : FontAwe', ...route?.params}}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.lemon,
            borderBottomWidth: 1,
            borderBottomColor: colors.dodgerblue,
          },
          title: 'Profile',
          headerTitleStyle: {color: colors.dodgerblue},
        }}
        initialParams={{iconName: 'user-tie: FontAwe5', ...route?.params}}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
