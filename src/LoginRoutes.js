import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PropTypes from "prop-types";

import { Login } from './screens'

const Stack = createStackNavigator();

const LoginRoutes = ({onLogin}) => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{headerShown: false}}>
          {() => <Login onLogin={onLogin} />}
        </Stack.Screen>
      </Stack.Navigator>
  </NavigationContainer>
  )
}

LoginRoutes.propTypes = {
  onLogin: PropTypes.func
}

export default LoginRoutes;