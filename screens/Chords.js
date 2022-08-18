import React, { Component } from "react";
import {Text, StyleSheet} from 'react-native';

export default class Chords extends Component{
render() {
  return(
    <Text style={styles.text}>Chords</Text>
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