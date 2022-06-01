import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import screens from '../screens';

const MainStackNav = createStackNavigator();

const MainStack = () => {
  return (
    <MainStackNav.Navigator
      initialRouteName="Discounts"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#FFF'
        },
      }}>
      <MainStackNav.Screen
        name="Discounts"
        options={{
          headerShown: false,
        }}
        component={screens.DiscountsContainer}
      />
      <MainStackNav.Screen
        name="DetailsBenefitInfo"
        options={{
          headerShown: false,
        }}
        component={screens.DetailsBenefitInfoContainer}
      />

    </MainStackNav.Navigator>
  );
};

export default MainStack;
