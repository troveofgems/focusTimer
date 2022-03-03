import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { TextInput } from 'react-native-paper';

import { RoundedButton } from '../../components/RoundedBtn/RoundedButton';

import {generateCSS} from "./FocusHistoryCSS";
export const FocusHistory = ({ showAppInGreyScale, appHistory }) => {
  const styles = generateCSS(showAppInGreyScale);
  console.log('styles for FocusHistory are: ', styles);

  const renderItem = ({ item }) => (<Text style={styles.item}>-> {item}</Text>);

  return (
    <View style={styles.focusHistoryComponent}>
      <Text style={styles.historyTitle}>Today's List</Text>
      {(!appHistory || !appHistory.length) ? (
        <Text style={styles.historyItem}>-> There's Nothing Here Yet!</Text>
      ) : (
        <FlatList
          data={appHistory} 
          renderItem={renderItem}
        />
      )}
    </View> 
  );
}