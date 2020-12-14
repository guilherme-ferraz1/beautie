import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';


import { SafeAreaView } from 'react-native-safe-area-context';


export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView>
        <StatusBar style="dark" />

        <View>
          <Text> index </Text>
        </View>
        
      </SafeAreaView>
    );
  }
}
