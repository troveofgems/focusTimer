import { Platform, StatusBar } from 'react-native';

import {getDeviceDefaultPadding, createStylesheet} from './utils/helpers';
import {palette} from './utils/colors';

const {white} = palette;

const baseApplicationStyles = {
  app_container: {
    backgroundColor: white,
    flex: 1,
    paddingTop: getDeviceDefaultPadding(Platform.OS, StatusBar)
  }
};

export const generateCSS = () => createStylesheet(baseApplicationStyles);