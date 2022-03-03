import React, { useState, useEffect } from 'react';
import {View} from 'react-native';

import {Timer} from '../../features/Timer/Timer';
import {Focus} from '../../features/Focus/Focus';
import {FocusHistory} from '../../features/FocusHistory/FocusHistory';

import {generateCSS} from './MainCSS';

export const MainViewOutlet = ({ showAppInGreyscale }) => {
  const 
    [trackingSubject, setTrackingSubject] = useState(false),
    [trackingValue, setTrackingValue] = useState(null),
    [appHistory, setAppHistory] = useState([]);
    
  const styles = generateCSS(showAppInGreyscale);

  const // Component Handlers
    resetApp = () => { setTrackingSubject(false); setTrackingValue(""); },
    onTimerEnd = (evtString) => setAppHistory([...appHistory, evtString]),
    handleBeginTracker = strVal => {
      setTrackingSubject(true);
      setTrackingValue(`${strVal}`);
    };

  return (
    <View style={styles.mainView}>
      {trackingSubject ? (
        <Timer 
          showAppInGreyScale={showAppInGreyscale}
          onResetApp={resetApp} 
          trackingValue={trackingValue}
          onTimerEnd={onTimerEnd}
        />
      ) : (
        <>
          <Focus 
            handleBeginTracker={handleBeginTracker} 
            showAppInGreyScale={showAppInGreyscale}
          />
          <FocusHistory 
            showAppInGreyScale={showAppInGreyscale}
            appHistory={appHistory}
          />
        </>
      )}
    </View>
  );
};