import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export default class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.item}>
          <Image style={styles.image} source={require('./../../../../../assets/produto0.png')}/>
          <Text style={styles.title}> Base neutra </Text>
          <Text style={styles.subTitle}> Revlon </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Image style={styles.image} source={require('./../../../../../assets/produto.png')}/>
          <Text style={styles.title}> Gel limpeza facial </Text>
          <Text style={styles.subTitle}> Neutrogena </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.item}>
          <Image style={styles.image} source={require('./../../../../../assets/produto1.png')}/>
          <Text style={styles.title}> Oleo de coco </Text>
          <Text style={styles.subTitle}> The body shop </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Image style={styles.image} source={require('./../../../../../assets/produto2.png')}/>
          <Text style={styles.title}> Hidratante corpo</Text>
          <Text style={styles.subTitle}> Neutrogena </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

ProductItem.propTypes = {
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    paddingTop: responsiveHeight(5),
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: responsiveWidth(1),
  },
  item: {
    width: responsiveWidth(39),
    height: responsiveHeight(25),
    marginBottom: responsiveHeight(3),
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    width: responsiveWidth(39),
    height: responsiveHeight(18),
    borderRadius: 10,
    resizeMode: 'cover'
  },
  title: {
    position: 'absolute',
    bottom: responsiveHeight(3.5),
    left: responsiveWidth(1.8),
    fontFamily: 'Bold',
    fontSize: responsiveFontSize(1.8),
    maxWidth: responsiveWidth(34)
  },
  subTitle: {
    position: 'absolute',
    bottom: responsiveHeight(1),
    left: responsiveWidth(2),
    fontFamily: 'SemiBold',
    color:'#949494', 
    fontSize: responsiveFontSize(1.6)
  }
}) 
