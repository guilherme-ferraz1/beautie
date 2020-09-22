import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import {Sequency} from './components';

export default class Sequencys extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const {onPress, userSequencys} = this.props;

    return (
      <View style={styles.container}>
        {userSequencys.map((userSequency, i) => {
          <Sequency 
            key={i}
            onPress={onPress}
            userSequency={userSequency}
          />
        })}
      </View>
    );
  }
}

Sequencys.propTypes = {
  onPress = PropTypes.func.isRequired,
  userSequencys = PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    marginTop: responsiveHeight(2),
  },
}) 
