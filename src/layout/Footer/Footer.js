import React, { useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {generateCSS} from './FooterCSS';

export const Footer = ({ showAppInGreyscale = false }) => {
  let 
    app_dev_ts = "02/2022",
    styles = generateCSS(showAppInGreyscale);

  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Version 1.0-alpha - TTOG ~ {app_dev_ts}</Text>
    </View>
  );
}