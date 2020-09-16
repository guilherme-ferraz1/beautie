import React, { useState, useEffect } from 'react';
import { Image, Text } from 'react-native';

import PropTypes from "prop-types";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { GRAPHQL_ENDPOINT } from "./Config";

import { Feed, Closet, Sequency, Search, Profile } from './screens';
import { WelcomeCarousel } from './components';

import { insertUsers } from '../data/mutations'

const Carousel = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainRoutes = ({token, onLogout, user}) => {

  const [client, setClient] = useState(null)
  const [carousel, setCarousel] = useState(false)
  var {isNewUser} = user;

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
      setCarousel(true)
    }

    setClient(client)
  }, [])

  if (isNewUser && carousel) {
    return (
      <NavigationContainer>
        <Carousel.Navigator>
          <Tab.Screen name="Perfil" options={{headerShown: false}}>
              {() => <WelcomeCarousel onChange={() => setCarousel(false)}/>}
            </Tab.Screen>
        </Carousel.Navigator>
      </NavigationContainer>
    )
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
              fontFamily: 'Regular'
            },
          }}
        >
          <Tab.Screen name="Ínicio" component={Feed} 
            options={{
              tabBarIcon: ({color}) => (
                <Image
                  source={require('./../assets/home-icon.png')}
                  style={{width: 23, height: 23, tintColor: color,}}
                />
              )
            }}
          />
          <Tab.Screen name="Procurar" component={Search}
            options={{
              tabBarIcon: ({color}) => (
                <Image
                  source={require('./../assets/search-icon.png')}
                  style={{width: 21, height: 21, tintColor: color,}}
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
          <Tab.Screen name="Sequências" component={Sequency}
            options={{
              tabBarIcon: ({color}) => (
                <Image
                  source={require('./../assets/sequency-icon.png')}
                  style={{width: 25, height: 25, tintColor: color,}}
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
                  style={{width: 21, height: 21, tintColor: color,}}
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