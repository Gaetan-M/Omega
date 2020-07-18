import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import BottomTabNavigator from './BottomTabNavigator';
import LoginNavigator from '../Pages/Login/Login'
import WelcomeScreen from '../Pages/Welcome/Welcome'

// export default createAppContainer(
//   createSwitchNavigator({

//     Main: BottomTabNavigator,
//     Login: LoginNavigator
//   })
// );

export default createAppContainer(
	createStackNavigator({
		Main:{
			screen:BottomTabNavigator
		},
		Welcome:{
			screen:WelcomeScreen
		},
		Login:{
			screen:LoginNavigator			
		}
	}, 
       {
       	initialRouteName:'Welcome',
       	headerMode:'none'}
	)) 