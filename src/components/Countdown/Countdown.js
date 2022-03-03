import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from 'react-native';

import {generateCSS} from './CountdownCSS';

import {minutesToMillis, formatTime} from '../../utils/helpers';

export const Countdown = ({
  minutes = 0.1,
  isPaused,
  onProgressUpdate,
  onTimerComplete,
  showAppInGreyScale
}, props) => {
  const styles = generateCSS(showAppInGreyScale);
  
  const interval = React.useRef(null);
  const countDown = () => {
    setMillis(time => {
    if (time === 0) {
      clearInterval(interval.current);
      onTimerComplete();
      return time;
    }
    const timeLeft = time - 1000;
    onProgressUpdate((timeLeft / minutesToMillis(minutes)))
    return timeLeft;
    });
  };

  useEffect(() => {
    if (isPaused) { 
      if (interval.current) clearInterval(interval.current);
      return; 
    }
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  const 
    [millis, setMillis] = useState(minutesToMillis(minutes)),
    minute = Math.floor(millis / 1000 / 60) % 60,
    seconds = Math.floor(millis / 1000) % 60;

  return (<Text style={styles.text}>{formatTime(minute)}:{formatTime(seconds)}</Text>);
}