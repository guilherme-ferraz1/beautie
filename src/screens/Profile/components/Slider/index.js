import React, { Component } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from "react-native";
import { Transition, Transitioning } from "react-native-reanimated";

import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

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

    const {selectedTab} = this.props;

    return (
      <Transitioning.View
        ref={this.ref}
        transition={this.transition}
        style={{ flex: 1 }}
      >
        <View style={{ ...styles.tabContainer }}>
          <View
            style={{
              position: "absolute",
              height: responsiveHeight(15),
              width: (width - 60) / 2,
              backgroundColor: "#9F86C0",
              left: selectedTab == 0 ? 0 : null,
              right: selectedTab == 1 ? 0 : null
            }}
          />

          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => this.selectTab(0)}
          >
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", alignItems: 'center' }}>
              <Text style={styles.text}> Publicações </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => this.selectTab(1)}
          >
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", alignItems: 'center'}}>
              <Text style={styles.text}> Recomendados </Text>
            </View>
          </TouchableOpacity>
        </View>

      </Transitioning.View>
    );
  }
}
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
    borderRadius: 30,
    width: width - responsiveWidth(16),
    alignSelf: 'center',
    backgroundColor: "white",
    overflow: "hidden",
  },
  text: {
    fontFamily: 'SemiBold', 
    fontSize: responsiveFontSize(2),
  },
});