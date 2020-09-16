import React from 'react'
import { Text, View, Image } from 'react-native'
import Swiper from 'react-native-swiper'

import { responsiveFontSize, responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions";

export default ({onChange}) => (
  <Swiper style={styles.wrapper} loop={false}>
    <View testID="Hello" style={styles.slide}>
      <Image
        source={require('../../../assets/carousel-illu.jpg')}
        style={{width: responsiveWidth(80), height: responsiveHeight(30)}}
      />
      <Text style={styles.text}>Controle seus produtos os adicionando ao seu closet.</Text>
    </View>
    <View testID="Beautiful" style={styles.slide}>
      <Image
        source={require('../../../assets/carousel-illu3.png')}
        style={{width: responsiveWidth(80), height: responsiveHeight(30)}}
      />
      <Text style={styles.text}>Crie sequências e compartilhe o seu talento com o mundo.</Text>
    </View>
    <View testID="Simple" style={styles.slide}>
      <Image
        source={require('../../../assets/carousel-illu2.png')}
        style={{width: responsiveWidth(80), height: responsiveHeight(30)}}
      />
      <Text style={styles.text}>Explore e descubra o que tem de melhor para você.</Text>
      <Text style={styles.nextText} onPress={onChange}> Começar! </Text>
    </View>
  </Swiper>
)

var styles = {
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    fontFamily: 'Bold',
    fontSize: responsiveFontSize(2.5),
    marginHorizontal: responsiveWidth(10),
    marginTop: responsiveHeight(5),
    textAlign: 'center'
  },
  nextText: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'Medium',
    position: 'absolute',
    right: responsiveWidth(10),
    bottom: responsiveHeight(3.5),
  }
}