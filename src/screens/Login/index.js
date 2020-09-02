import React, {Component} from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Alert, Button } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import * as Random from 'expo-random';
import * as SecureStore from 'expo-secure-store';
import jwtDecoder from 'jwt-decode';
import queryString from 'query-string';

import { responsiveFontSize } from "react-native-responsive-dimensions";

import PropTypes from 'prop-types';

import { AUTH_CLIENT_ID, AUTH_DOMAIN, ID_TOKEN_KEY, NONCE_KEY } from '../../Config';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const generateNonce = async () => {
  const nonce = String.fromCharCode.apply(
    null,
    await Random.getRandomBytesAsync(16)
  );
  await SecureStore.setItemAsync(NONCE_KEY, nonce);
  return nonce;
};

const Login = ({ onLogin }) => {  
  const handleLoginPress = async () => {
    const nonce = await generateNonce();
    AuthSession.startAsync({
      authUrl:
        `${AUTH_DOMAIN}/authorize?` +
        queryString.stringify({
          client_id: AUTH_CLIENT_ID,
          response_type: "id_token",
          scope: "openid profile email",
          redirect_uri: AuthSession.getRedirectUrl(),
          nonce
        })
    }).then(result => {
      if (result.type === "success") {
        decodeToken(result.params.id_token);
      } else if (result.params && result.params.error) {
        Alert.alert(
          "Error",
          result.params.error_description ||
            "Algo deu errado."
        );
      }
    });
  };

  const decodeToken = token => {
    const decodedToken = jwtDecoder(token);
    const { nonce, sub, email, name, exp } = decodedToken;

    SecureStore.getItemAsync(NONCE_KEY).then(storedNonce => {
      if (nonce == storedNonce) {
        SecureStore.setItemAsync(
          ID_TOKEN_KEY,
          JSON.stringify({
            id: sub,
            email,
            name,
            exp,
            token
          })
        ).then(onLogin);
      } else {
        Alert.alert("Error", "Nonces don't match");
        return;
      }
    });
  };

  return (

    <View style={styles.container}>

      <StatusBar style="dark" />

      <View style={{zIndex: 3}}>

        <Text style={styles.title}>
          Beautie.
        </Text>
        
      </View>
      
      <TouchableOpacity 
        style={styles.loginButton}
        onPress={handleLoginPress}
      > 
        <Text style={styles.loginText}>
          Entrar agora
        </Text>
      </TouchableOpacity>

      <View style={styles.topShape} />
      <View style={styles.downShape}/>
      <View style={styles.middleShape}/>

    </View>
  );
};

Login.propTypes = {
  token: PropTypes.string,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231942',
    alignItems: 'center',
  },
  topShape: {
    position: 'absolute',
    width: 866,
    height: 833,
    left: windowWidth - 500,
    top: windowHeight - 900,
    backgroundColor: '#FFFFFF',
    borderRadius: 850/2,
    zIndex: 1
  },
  middleShape: {
    position: 'absolute',
    width: 802,
    height: 681,
    left: windowWidth - 432,
    top: windowHeight - 680,
    backgroundColor: '#9F86C0',
    borderRadius: 760/2,
  },
  downShape: {
    position: 'absolute',
    width: 774,
    height: 558,
    left: windowWidth - 445,
    top: windowHeight - 540,
    backgroundColor: '#5E548E',
    borderRadius: 640/2,
  },
  title: {
    fontFamily: 'Title', 
    zIndex: 2, 
    color: '#231942', 
    fontSize: responsiveFontSize(9), 
    marginTop: 150
  },
  loginButton: {
    borderRadius: 34,
    borderWidth: 1,
    borderColor: '#231942',
    backgroundColor: 'white',
    width: '60%',
    height: 45,
    zIndex: 2,
    marginTop: 140,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginText: {
    fontFamily: 'Bold', 
    color: '#231942', 
    fontSize: 18
  },

});
