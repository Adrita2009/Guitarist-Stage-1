import React, { Component } from "react";
import {Text, StyleSheet} from 'react-native';

export default class Tutorial extends Component{
render() {
  return(
    <Text style={styles.text}>Tutorial</Text>
  );
};
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
})