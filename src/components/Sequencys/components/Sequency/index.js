import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export default class Sequency extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const {onPress, userSequency} = this.props;

    var {uri, name, stepsCount, productsCount} = userSequency;

    return (
      <TouchableOpacity style={styles.item} onPress={onPress}>
        <Image style={styles.itemImage} source={uri}/> 
        <View style={styles.itemTitle}>
          <Text style={styles.itemText}>{name} </Text>              
        </View>
        <Text style={styles.itemInfo}> {stepsCount} Passos | {productsCount} Produtos </Text> 
    </TouchableOpacity>
    );
  }
}

Sequency.propTypes = {
  onPress: PropTypes.func.isRequired,
  userSequency: PropTypes.object.isRequired,
};


const styles = StyleSheet.create({
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
