import React, { Component } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";


export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {    

    return (
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statText}>
            4090
          </Text>
          <Text style={styles.statSubText}>
            Seguidores
          </Text>
        </View>

        <Image source={require('./../../../../../assets/line.png')}/>

        <View style={styles.stat}>
          <Text style={styles.statText}>
            12
          </Text>
          <Text style={styles.statSubText}>
            Publicações
          </Text>
        </View>

        <Image source={require('./../../../../../assets/line.png')}/>

        <View style={styles.stat}>
          <Text style={styles.statText}>
            207
          </Text>
          <Text style={styles.statSubText}>
            Seguindo
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stats: {
    width: '75%',
    marginTop: responsiveHeight(5),
    backgroundColor: 'white',
    height: responsiveHeight(7),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginRight: responsiveWidth(2)
  },
  statText: {
    fontFamily: 'Bold', 
    fontSize: responsiveFontSize(2.5), 
  },
  statSubText: {
    fontFamily: 'Light', 
    fontSize: responsiveFontSize(1.8),
    color: '#909090'
  },
  stat: {
    alignItems: 'center',
  }
})