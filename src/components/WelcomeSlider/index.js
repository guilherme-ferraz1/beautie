import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import Swiper from 'react-native-swiper'

import { responsiveFontSize } from "react-native-responsive-dimensions";


var styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: responsiveFontSize(5),
    fontFamily: 'Regular'
  },
  nextText: {
    color: '#fff',
    fontSize: responsiveFontSize(3),
    fontFamily: 'Bold',
    position: 'absolute',
    right: 25,
    bottom: 23,
  }
}

export default () => (
    <Swiper style={styles.wrapper} loop={false}>
        <View testID="Hello" style={styles.slide1}>
          <SafeAreaView>
            <Text style={styles.text}>Hello Swiper</Text>
          </SafeAreaView>
        </View>
      <View testID="Beautiful" style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
      <View testID="Simple" style={styles.slide3}>
        <Text style={styles.text}>And simple</Text>
        <Text style={styles.nextText}> Avançar </Text>
      </View>
    </Swiper>
)