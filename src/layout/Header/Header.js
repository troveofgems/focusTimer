import React, { useEffect } from 'react';
import {View, Text} from 'react-native';

import {generateCSS} from './HeaderCSS';

export const Header = ({showAppInGreyscale}) => {
  let styles = generateCSS(showAppInGreyscale);

  return (
    <View style={styles.header}>
      <Text style={styles.text}>FocusTimer</Text>
    </View>
  );
}