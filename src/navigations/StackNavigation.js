import React from 'react';
import {Pressable} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegistrationScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/LoginScreen';
import TabNavigation from './TabNavigation';
import ProductScreen from '../screens/Product/ProductScreen';
import ProductDetail from '../screens/Product/ProductDetail';
import {colors} from '../constants/colors';
import Icon from '../components/Icon';

const Stack = createNativeStackNavigator();

const defaultOption = ({route}) => ({
  title: route?.params?.name ?? route?.params?.title,
  headerShown: true,
});

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, headerBackTitleVisible: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      {
        //Product Stack Start
      }
      <Stack.Group>
        <Stack.Screen
          name="ProductScreen"
          component={ProductScreen}
          options={({route}) => ({
            ...{...defaultOption({route})},
            headerStyle: {
              backgroundColor: colors.lemon,
              borderBottomWidth: 1,
              borderBottomColor: colors.dodgerblue,
            },
          })}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={({route, navigation}) => ({
            ...{...defaultOption({route})},
            headerStyle: {
              backgroundColor: colors.lemon,
              borderBottomWidth: 1,
              borderBottomColor: colors.dodgerblue,
            },
            headerRight: () => {
              return (
                <Pressable
                  onPress={() => {
                    navigation.navigate('CartScreen');
                  }}>
                  <Icon name="cart-arrow-right : matcom" size={28} />
                </Pressable>
              );
            },
          })}
        />
      </Stack.Group>
      {
        //Product Stack End
      }
    </Stack.Navigator>
  );
};

export default StackNavigation;
