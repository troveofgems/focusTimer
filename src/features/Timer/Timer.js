import React, { useState }        from 'react';
import { Text, View, Platform } from 'react-native';
import { ProgressBar }            from 'react-native-paper';
import { useKeepAwake }   from 'expo-keep-awake';

import { Countdown }      from '../../components/Countdown/Countdown';
import { Timing }         from './Timing';
import { RoundedButton }  from '../../components/RoundedBtn/RoundedButton';

import {vibrateDevice} from '../../utils/helpers';

import {palette} from '../../utils/colors';

import {generateCSS} from './TimerCSS';
export const Timer = ({ onResetApp: resetApp, trackingSubject, trackingValue, showAppInGreyScale, onTimerEnd }) => {
  const {white, middlePurple} = palette;

  console.log('Timer end is: ', onTimerEnd);

  useKeepAwake();

  const 
    DEFAULT_MINUTE_TIMER                = 0.1,
    [minutes, setMinutes]               = useState(DEFAULT_MINUTE_TIMER),
    [progress, setProgress]             = useState(1),
    [resetTimer, setResetTimer]         = useState(false),
    [hasBeenStarted, setHasBeenStarted] = useState(false);

  const onProgressUpdate = progressUpdate => {
    setProgress(progressUpdate);    
  };

  const changeTimerMinutes = desiredTime => {
    setMinutes(desiredTime);
    setProgress(1);
    setHasBeenStarted(false);
  };

  const timerComplete = () => {
    vibrateDevice(Platform.OS); // Use Default Time Selection: 10s for both iOS and Android
    setMinutes(DEFAULT_MINUTE_TIMER);
    setProgress(1);
    setHasBeenStarted(false);
    onTimerEnd(trackingValue);
    resetApp();
  };

  const styles = generateCSS(showAppInGreyScale);

  const promptForReset = () => {
    return resetApp(); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown 
          minutes={minutes} 
          isPaused={!hasBeenStarted} 
          onProgressUpdate={onProgressUpdate} 
          onTimerComplete={timerComplete} 
          showAppInGreyScale={showAppInGreyScale}
        />
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{trackingValue}</Text>
      </View>
      <View style={styles.progressBarWrapper}>
        <ProgressBar color={showAppInGreyScale ? white : middlePurple} style={{ height: 10 }} progress={progress}/>
      </View>
      <View style={styles.buttonWrapper}>
        <Timing onChangeTimerMinutes={changeTimerMinutes} showAppInGreyScale={showAppInGreyScale} />
      </View>
      <View style={styles.buttonWrapper}>
      { hasBeenStarted ? (
        <View style={styles.focusActionButtons}>
          <RoundedButton
            style={styles.resetActionBtn} textStyle={styles.resetBtnTextColor}
            title="Pause" onPress={() => { setHasBeenStarted(false) }} 
          />
        </View>
      ) : (
        <View style={styles.focusActionButtons}>
          <RoundedButton 
            style={styles.actionButton} textStyle={styles.buttonTextColor}
            title="Start" onPress={() => { setHasBeenStarted(true) }} 
          />
          <RoundedButton 
            style={styles.resetActionBtn} textStyle={styles.resetBtnTextColor}
            title="End" onPress={() => promptForReset()} 
          />
        </View>
      )}
      </View>
    </View>
  );
};