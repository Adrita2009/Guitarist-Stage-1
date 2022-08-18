import React, { Component } from "react";
import {Text, StyleSheet} from 'react-native';

export default class Sample extends Component{
render() {
  return(
    <Text style={styles.text}>Sample</Text>
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