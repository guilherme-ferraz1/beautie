import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { Ionicons } from '@expo/vector-icons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const { navigation } = this.props

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Ionicons name="md-arrow-back" size={32} color="#231942" onPress={() => navigation.goBack()}/>
            <Text style={styles.title}>Maquiagem básica para o ano novo.</Text>
            <Text style={styles.subTitle}>
              <Text>por</Text>
              <Text style={{fontFamily: 'Bold'}}> Guilherme Ferraz</Text>
            </Text>
          </View>

        </ScrollView>
      </SafeAreaView>
    );
  }
}

index.propTypes = {
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'column',
    marginHorizontal: responsiveWidth(8),
    marginTop: responsiveHeight(2),
    alignItems: 'flex-start'
  },
  title: {
    fontFamily: 'ExtraBold',
    fontSize: responsiveFontSize(4),
    color: '#231942'
  },
  subTitle: {
    fontFamily: 'Regular',
    fontSize: responsiveFontSize(2),
    color: '#231942',
    marginTop: responsiveHeight(2)
  }
}) 
