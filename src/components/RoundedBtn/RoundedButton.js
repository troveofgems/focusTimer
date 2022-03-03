import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import {generateCSS} from './RoundedBtnCSS';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  showAppInGreyScale,
  ...props
}) => {
  const styles = generateCSS(showAppInGreyScale, size);
  
  return (
    <TouchableOpacity style={[styles.radius, style]} onPress={props.onPress}>
      <Text style={[styles.text, textStyle]}>{props.title}</Text>
    </TouchableOpacity >
  )
};