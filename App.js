import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Platform, StatusBar } from 'react-native';

import {RenderToGreyScale} from './src/components/RenderToGreyScale';
import {Header} from './src/layout/Header/Header';
import {MainViewOutlet} from './src/layout/Main/Main';
import {Footer} from './src/layout/Footer/Footer';

import {generateCSS} from './src/AppCSS';

export default function App() {
  const // Component State 
    [showAppInGreyscale, setShowAppInGreyscale] = useState(true);

  const // Component Handlers
    handleRequestForGreyScaleView = () => setShowAppInGreyscale(!showAppInGreyscale);

  const styles = generateCSS();
  
  return (
    <SafeAreaView style={styles.app_container}>
      <RenderToGreyScale handleRequestForGreyScaleView={handleRequestForGreyScaleView} showAppInGreyscale={showAppInGreyscale}/>
      <Header showAppInGreyscale={showAppInGreyscale} />
      <MainViewOutlet showAppInGreyscale={showAppInGreyscale} />
      <Footer showAppInGreyscale={showAppInGreyscale} />
    </SafeAreaView>
  );
}