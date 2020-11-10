import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export default class InspirationSequencys extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}> 
        <TouchableOpacity style={styles.item}>
          <Image style={styles.itemImage} source={require('./../../../../../assets/maquiagem.jpg')}/> 
          <View style={styles.itemTitle}>
            <Text style={styles.itemText}>Maquiagem radical para o seu dia a dia. </Text>              
          </View>
          <Text style={styles.itemInfo}> 6 Passos | 3 Produtos </Text> 
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Image style={styles.itemImage} source={require('./../../../../../assets/skincare.jpg')}/> 
          <View style={styles.itemTitle}>
            <Text style={styles.itemText}>Cuidados com a pele essenciais. </Text>              
          </View>
          <Text style={styles.itemInfo}> 12 Passos | 4 Produtos </Text> 
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Image style={styles.itemImage} source={require('./../../../../../assets/festa.jpeg')}/> 
          <View style={styles.itemTitle}>
            <Text style={styles.itemText}>Maquiagem ano novo 2021. </Text>              
          </View>
          <Text style={styles.itemInfo}> 21 Passos | 12 Produtos </Text> 
        </TouchableOpacity>
      </View>
    );
  }
}

InspirationSequencys.propTypes = {
};


const styles = StyleSheet.create({
  container: {
    marginTop: responsiveHeight(2),
  },
  item: {
    marginTop: responsiveHeight(3),
    alignSelf: 'center',
    width: '85%',
    backgroundColor: 'white',
    height: responsiveHeight(18),
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    flexDirection: 'row',
  },
  itemImage: {
    flex: 1,
    height: responsiveHeight(15),
    margin: 10,
    width: responsiveWidth(5),
    resizeMode: 'cover',
    borderRadius: 10
  },
  itemTitle: {
    flex: 2,
    marginTop: responsiveHeight(3),
    maxHeight: responsiveHeight(10),
    maxWidth: responsiveWidth(60),
    marginRight: 10,

  },
  itemText: {
    padding: 5,
    fontFamily: 'Bold',
    fontSize: responsiveFontSize(2.2),
    textAlign: 'left'
  },
  itemInfo: {
    position: 'absolute',
    right: responsiveWidth(5),
    bottom: responsiveHeight(1.5),
    fontFamily: 'SemiBold',
    fontSize: responsiveFontSize(1.6),
    color: '#CACACA'
  }
}) 
