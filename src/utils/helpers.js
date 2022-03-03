/** HELPER IMPORTS */
import { StyleSheet, Vibration } from 'react-native';
// ** HELPER EXPORTS */

export const minutesToMillis = minutes => (minutes * 1000 * 60);
export const formatTime = time => time < 10 ? `0${time}` : time;

export const getDeviceDefaultPadding = (platform_os, statusBar) => platform_os === 'android' ? statusBar.currentHeight : 0;
export const createStylesheet = (componentCSSDefinition = {}) => StyleSheet.create(componentCSSDefinition);

export const vibrateDevice = (platform_os, iOS_timeInMillis = 1000, android_timeInSeconds = "10s") => {
  if (platform_os === 'ios') {
    const interval = setInterval(() => Vibration.vibrate(), iOS_timeInMillis);
    setTimeout(() => clearInterval(interval), (10 * iOS_timeInMillis));
  } else {
    return Vibration.vibrate(android_timeInSeconds);
  }
}