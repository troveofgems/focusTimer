import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import { RoundedButton } from '../../components/RoundedBtn/RoundedButton';

import {generateCSS} from "./FocusCSS";
export const Focus = ({handleBeginTracker, showAppInGreyScale = false}) => {
  const 
    [subject, setSubject] = useState(""),
    styles = generateCSS(showAppInGreyScale);

  return (
    <View style={styles.focusComponent}>
      <Text style={styles.componentTitle}>
        Ready to start your next task?
      </Text>
      <View style={styles.inputLayoutContainer}>
        <TextInput style={styles.inputTextContainer}
          label="What would you like to focus on?"
          onChangeText={setSubject}
        />
        <RoundedButton 
          size={50} 
          title="+" 
          onPress={() => handleBeginTracker(subject)} 
          showAppInGreyScale={showAppInGreyScale}
        />
      </View>
    </View> 
  );
}