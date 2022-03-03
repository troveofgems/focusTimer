import React, { useState } from 'react';
import { View, Text, StyleSheet } from "react-native";
import Checkbox from 'expo-checkbox';

export const RenderToGreyScale = ({handleRequestForGreyScaleView, showAppInGreyscale}) => {
  console.log('have function? ', handleRequestForGreyScaleView, showAppInGreyscale);
  return (
    <View style={styles.container}>
      <Checkbox value={showAppInGreyscale} onValueChange={() => handleRequestForGreyScaleView()} />
      <Text style={styles.helperText}>Render App In Greyscale</Text>
    </View>
  )
}

const styles = { // NEVER CHANGE THESE BASE STYLES CAVALIERLY
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    padding: 10
  },
  helperText: {
    paddingLeft: 5,
    fontSize: 20
  },
};