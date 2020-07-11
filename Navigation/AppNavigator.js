import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import BottomTabNavigator from './BottomTabNavigator';
import LoginNavigator from '../Pages/Login/Login'


export default createAppContainer(
  createSwitchNavigator({

    Main: BottomTabNavigator,
    Login: LoginNavigator
  })
);