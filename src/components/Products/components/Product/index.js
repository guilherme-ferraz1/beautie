import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const {onPress, userProduct} = this.props;

    var {uri, name, brand} = userProduct;

    return (
      <TouchableOpacity onPress={onPress} style={styles.item}>
        <Image style={styles.image} source={uri}/>
        <Text style={styles.title}> {name} </Text>
        <Text style={styles.subTitle}> {brand} </Text>
      </TouchableOpacity>
    );
  }
}

Product.propTypes = {
  onPress: PropTypes.func.isRequired,
  userProduct: PropTypes.object.isRequired,
};


const styles = StyleSheet.create({
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
