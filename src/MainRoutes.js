import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';

import PropTypes from "prop-types";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { GRAPHQL_ENDPOINT } from "./Config"

import { Feed, Closet, Post, Search, Profile } from './screens'

const Tab = createBottomTabNavigator();

const MainRoutes = ({token, onLogout}) => {

  const [client, setClient] = useState(null)

  useEffect(() => {
    setClient(
      new ApolloClient({
        uri: GRAPHQL_ENDPOINT,
        headers:  {
          Authorization: `Bearer ${token}`,
        },
      })
    );
  }, [])

  if (!client) return null;

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
            showLabel: false,
          }}
        >
          <Tab.Screen name="Feed" component={Feed} 
            options={{
              tabBarIcon: ({color}) => (
                <Image
                  source={require('./../assets/home-icon.png')}
                  style={{width: 25, height: 25, tintColor: color,}}
                />
              )
            }}
          />
          <Tab.Screen name="Search" component={Search}
            options={{
              tabBarIcon: ({color}) => (
                <Image
                  source={require('./../assets/search-icon.png')}
                  style={{width: 23, height: 23, tintColor: color,}}
                />
              )
            }}
          />
          <Tab.Screen name="Post" component={Post}
            options={{
              tabBarIcon: ({color}) => (
                <Image
                  source={require('./../assets/post-icon.png')}
                  style={{width: 23, height: 23, tintColor: color,}}
                />
              )
            }}
          />
          <Tab.Screen name="Closet" component={Closet} 
            options={{
              tabBarIcon: ({color}) => (
                <Image
                  source={require('./../assets/closet-icon.png')}
                  style={{width: 23, height: 23, tintColor: color,}}
                />
              )
            }}
          />
          <Tab.Screen 
            name="Profile"
            options={{
              tabBarIcon: ({color}) => (
                <Image
                  source={require('./../assets/user-icon.png')}
                  style={{width: 23, height: 23, tintColor: color,}}
                />
              )
            }}
          >
            {() => <Profile onLogout={onLogout} />}
          </Tab.Screen>
          
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

MainRoutes.propTypes = {
  token: PropTypes.string.isRequired,
  onLogout: PropTypes.func
}

export default MainRoutes;