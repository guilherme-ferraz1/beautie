import React, {useState, useEffect} from 'react';

import { AppLoading } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import LoginRoutes from './src/LoginRoutes';
import MainRoutes from './src/MainRoutes'

import { ID_TOKEN_KEY } from "./src/Config";
import * as SecureStore from "expo-secure-store";

import { useFonts, Muli_300Light, Muli_400Regular, Muli_500Medium, Muli_600SemiBold, Muli_700Bold,
} from '@expo-google-fonts/muli'

const RCTNetworking = require('react-native/Libraries/Network/RCTNetworking');

export default function App() {

  const [token, setToken] = useState(null);

  useEffect(() => {
    handleLogin();
  }, []);

  const handleLogin = () => {
    SecureStore.getItemAsync(ID_TOKEN_KEY).then(session => {
      if (session) {
        const sessionObj = JSON.parse(session);
        const { exp, token } = sessionObj;
        if (exp > Math.floor(new Date().getTime() / 1000)) {
          setToken(token)
        }
      }
    });
  }

  console.log(ID_TOKEN_KEY)

  let [fontsLoaded, error] = useFonts({
    'Regular': Muli_400Regular,
    'Light': Muli_300Light,
    'Medium': Muli_500Medium,
    'SemiBold': Muli_600SemiBold,
    'Bold': Muli_700Bold,
    'Title': require('./assets/fonts/proxima-nova-black.ttf')
  })

  if (!fontsLoaded) {

    return <AppLoading/>;

  } 

  return (
    <SafeAreaProvider>
      {token ?
        <MainRoutes
        token={token}
        onLogout={() => {
          setToken(null)
          SecureStore.deleteItemAsync(ID_TOKEN_KEY)
        }}
      /> 
      :
      <LoginRoutes 
        onLogin={handleLogin}
      />
 }
    </SafeAreaProvider>
  );
}