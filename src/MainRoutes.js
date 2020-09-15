import React, { useState, useEffect } from 'react';
import { Image, Text } from 'react-native';

import PropTypes from "prop-types";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { GRAPHQL_ENDPOINT } from "./Config"

import { Feed, Closet, Post, Search, Profile } from './screens'

import { insertUsers } from '../data/mutations'

const Tab = createBottomTabNavigator();

const MainRoutes = ({token, onLogout, user}) => {

  const [client, setClient] = useState(null)
  const {isNewUser} = user;

  useEffect(() => {
    const {id, name, isNewUser, username} = user;
  
    const client = new ApolloClient({
      uri: GRAPHQL_ENDPOINT,
      headers:  {
        Authorization: `Bearer ${token}`,
      }
    });

    if (isNewUser) {       
      client.mutate({
        mutation: insertUsers,
        variables: {id, name, username}
      });
    }

    setClient(client)
  }, [])

  if (isNewUser) {
    console.log('novo usuario')
  }

  if (!client) return null;

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#231942',
            inactiveTintColor: 'gray',
            labelStyle: {
              fontSize: 10,
              margin: 0,
              padding: 0,
              fontFamily: 'Regular'
            },
          }}
        >
          <Tab.Screen name="Ínicio" component={Feed} 
            options={{
              tabBarIcon: ({color}) => (
                <Image
                  source={require('./../assets/home-icon.png')}
                  style={{width: 25, height: 25, tintColor: color,}}
                />
              )
            }}
          />
          <Tab.Screen name="Procurar" component={Search}
            options={{
              tabBarIcon: ({color}) => (
                <Image
                  source={require('./../assets/search-icon.png')}
                  style={{width: 23, height: 23, tintColor: color,}}
                />
              )
            }}
          />
          <Tab.Screen name="Compartilhar" component={Post}
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
            name="Perfil"
            options={{
              tabBarIcon: ({color}) => (
                <Image
                  source={require('./../assets/user-icon.png')}
                  style={{width: 23, height: 23, tintColor: color,}}
                />
              )
            }}
          >
            {() => <Profile onLogout={onLogout} user={user}/>}
          </Tab.Screen>
          
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

MainRoutes.propTypes = {
  token: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

export default MainRoutes;