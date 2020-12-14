import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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
      <KeyboardAwareScrollView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="md-arrow-back" size={32} color="#231942"/>
            </TouchableOpacity>
            <Text style={styles.title}>Nova sequência</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.label}>Foto de capa</Text>
            <View style={styles.addImage}>  
              <Ionicons name="ios-add" size={32} color="#231942"/>
            </View>
          </View>

          <View style={styles.item}>
            <Text style={styles.label}>Escolher título</Text>
            <TextInput style={styles.input}/>
          </View>

          <View style={styles.divisor} />

          <View style={styles.item}>
            <Text style={styles.label}>Passo 1</Text>
            <TextInput style={styles.input}/>
          </View>

      </KeyboardAwareScrollView>
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
    marginTop: responsiveHeight(4),
    alignItems: 'flex-start'
  },
  title: {
    fontFamily: 'ExtraBold',
    fontSize: responsiveFontSize(4),
    color: '#231942'
  },
  label: {
    marginBottom: responsiveHeight(2),
    fontFamily: 'Regular',
    fontSize: responsiveFontSize(2),
    color: '#231942',
  },
  item: {
    marginHorizontal: responsiveWidth(8),
    marginTop: responsiveHeight(4),
  },
  addImage: {
    height: responsiveHeight(14),
    width: responsiveWidth(26),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#231942',
    borderWidth: 1,
    borderRadius: 10
  },
  input: {
    height: responsiveHeight(6),
    width: responsiveWidth(80),
    borderColor: '#231942',
    borderWidth: 1,
    borderRadius: 10,
    fontFamily: 'Regular',
    fontSize: responsiveFontSize(2),
    color: '#231942',
    paddingLeft: 8
  },
  divisor: {
    marginHorizontal: responsiveWidth(8),
    height: responsiveHeight(0.1),
    width: responsiveWidth(80),
    marginTop: responsiveHeight(6),
    backgroundColor: '#9F86C0'
  }
}) 

