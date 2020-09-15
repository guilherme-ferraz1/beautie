import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image} from 'react-native';

import { Stats, Slider } from './components';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';

import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";


export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0
    };
  }

 //<Button title="sair" onPress={onLogout}/>

  renderTabs() {

    const {selectedTab} = this.state;

    if (selectedTab === 0) {
      return (
        <Text> Publicacoes </Text>
      )
    }

    if (selectedTab === 1) {
      return (
        <Text> Recomendados </Text>
      )
    }
  }

  render() {    

    var {onLogout} = this.props;
    const {selectedTab} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="light"/>
          <ScrollView style={styles.headerContainer}>
            <View style={{marginTop: responsiveHeight(4)}}>
              <Image 
                source={require('./../../../assets/me.png')} 
                style={styles.profileImage}
              />
              <Image
                source={require('./../../../assets/engrenagem.png')}
                style={styles.settings}
              />
              <Stats/>
            </View>

            <Slider
              selectedTab={selectedTab}
              onChange={(tabIndex) => this.setState({selectedTab: tabIndex})}
            />

            {this.renderTabs()}
          </ScrollView>
      </SafeAreaView>
    );
  }
}

Profile.propTypes = {
  onLogout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: '#5E548E',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
    },
  headerContainer: {
    flex: 1,
    marginTop: responsiveHeight(3),
    width: '100%' ,
    backgroundColor: 'white',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  profileImage: {
    alignSelf: 'center',
    borderRadius: 20,
    height: responsiveHeight(15),
    width: responsiveWidth(28),
    resizeMode: 'cover'
  },
  settings: {
    position: 'absolute',
    right: responsiveWidth(7), 
  },
})