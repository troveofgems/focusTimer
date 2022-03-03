import React from 'react';
import { View, StyleSheet } from 'react-native';

import { RoundedButton } from '../../components/RoundedBtn/RoundedButton';

import {generateCSS} from './TimingCSS';
export const Timing = ({ onChangeTimerMinutes, showAppInGreyScale = false }) => {
  console.log('Inside timing, need ', showAppInGreyScale);
  const 
    styles = generateCSS(showAppInGreyScale),
    timerOptionsInMinutes = [20, 15, 10, 5].sort((a, b) => (a - b)),
    STANDARD_BUTTON_SIZE = parseInt(75);
  
  return (
    <View style={styles.timerOptionsWrapper}>
      <RoundedButton 
        size={STANDARD_BUTTON_SIZE} title={`${timerOptionsInMinutes[0]}`} 
        style={styles.timerOptionButton} textStyle={styles.buttonTextColor}
        onPress={() => { onChangeTimerMinutes(timerOptionsInMinutes[0]) }} 
      />
      <RoundedButton 
        size={STANDARD_BUTTON_SIZE} title={`${timerOptionsInMinutes[1]}`} 
        style={styles.timerOptionButton} textStyle={styles.buttonTextColor}
        onPress={() => { onChangeTimerMinutes(timerOptionsInMinutes[1]) }} 
      />
      <RoundedButton 
        size={STANDARD_BUTTON_SIZE} title={`${timerOptionsInMinutes[2]}`} 
        style={styles.timerOptionButton} textStyle={styles.buttonTextColor}
        onPress={() => { onChangeTimerMinutes(timerOptionsInMinutes[2]) }} 
      />
      <RoundedButton 
        size={STANDARD_BUTTON_SIZE} title={`${timerOptionsInMinutes[3]}`} 
        style={styles.timerOptionButton} textStyle={styles.buttonTextColor}
        onPress={() => { onChangeTimerMinutes(timerOptionsInMinutes[3]) }} 
      />
    </View>
  );
};