import React, { Component } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from "react-native";
import { Transition, Transitioning } from "react-native-reanimated";

import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

import PropTypes from 'prop-types';

const { width } = Dimensions.get("window");

class Slider extends Component {
  constructor() {
    super();
    this.state = {
    };

    this.ref = React.createRef();
  }

  selectTab(tabIndex) {

    const {onChange} = this.props

    this.ref.current.animateNextTransition();
    onChange(tabIndex)
  };

  transition = (
    <Transition.Change />
  );

  render() {

    const {selectedTab, leftText, rightText} = this.props;

    return (
      <Transitioning.View
        ref={this.ref}
        transition={this.transition}
        style={{ flex: 1 }}
      >
        <View style={styles.tabContainer}>
          <View
            style={{
              position: "absolute",
              height: responsiveHeight(6),
              width: (width - 60) / 2,
              borderRadius: 10,
              borderColor: "#9F86C0",
              borderWidth: 2,
              left: selectedTab == 0 ? 0 : null,
              right: selectedTab == 1 ? 0 : null,
            }}
          />

          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => this.selectTab(0)}
          >
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", alignItems: 'center' }}>
              <Text style={styles.text}> {leftText} </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => this.selectTab(1)}
          >
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", alignItems: 'center'}}>
              <Text style={styles.text}> {rightText} </Text>
            </View>
          </TouchableOpacity>
        </View>

      </Transitioning.View>
    );
  }
}

Slider.propTypes = {
  rightText: PropTypes.string.isRequired,
  leftText: PropTypes.string.isRequired,
  selectedTab: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabContainer: {
    height: responsiveHeight(6),
    flexDirection: "row",
    marginTop: responsiveHeight(3),
    borderRadius: 10,
    width: width - responsiveWidth(16),
    alignSelf: 'center',
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  text: {
    fontFamily: 'SemiBold', 
    fontSize: responsiveFontSize(2),
  },
});