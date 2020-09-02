import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {    

    var {onLogout} = this.props;

    return (
      <SafeAreaView>
        <View>
          <Button title='teste' onPress={onLogout}/>
        </View>
      </SafeAreaView>
    );
  }
}
