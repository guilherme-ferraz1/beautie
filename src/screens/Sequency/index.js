import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { Ionicons } from '@expo/vector-icons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

import { Slider } from './../../components'
import {MySequencys, InspirationSequencys} from './components'

export default class Sequency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0
    };
  }

  renderTabs() {

    const {selectedTab} = this.state;

    if (selectedTab === 1) {
      return (
        <InspirationSequencys/>

      )
    }

    if (selectedTab === 0) {
      return (
        <MySequencys/>
      )
    }
  }

  render() { 

    var {selectedTab} = this.state

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.title}> Sequências </Text>
            <Ionicons name="ios-add-circle" size={44} color="#5E548E"/>
          </View>

          <Slider
            selectedTab={selectedTab}
            onChange={(tabIndex) => this.setState({selectedTab: tabIndex})}
            leftText={'Minhas'}
            rightText={'Salvas'}
          />

          {this.renderTabs()}

        </ScrollView>
      </SafeAreaView>
    );
  }
}

Sequency.propTypes = {
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  header: {
    height: responsiveHeight(8),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: responsiveWidth(5),
    marginTop: responsiveHeight(3)
  },
  title: {
    fontFamily: 'ExtraBold',
    fontSize: responsiveFontSize(4),
    color: '#231942'
  }
}) 
