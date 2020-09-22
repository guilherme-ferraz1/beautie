import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import {Product} from './components';

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const {onPress, userProducts} = this.props;

    return (
      <View style={styles.imageContainer}>
        {userProducts.map((userProduct, i) => {
          <Product 
            key={i}
            onPress={onPress}
            userProduct={userProduct}
          />
        })}
      </View>
    );
  }
}

Products.propTypes = {
  onPress = PropTypes.func.isRequired,
  userProducts = PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  imageContainer: {
    paddingTop: responsiveHeight(5),
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: responsiveWidth(1),
  },
}) 
