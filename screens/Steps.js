import React, { Component } from "react";
import {Text, StyleSheet} from 'react-native';

export default class Steps extends Component{
render() {
  return(
    <Text style={styles.text}>Steps</Text>
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