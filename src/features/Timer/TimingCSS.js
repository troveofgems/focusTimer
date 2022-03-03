import {createStylesheet} from '../../utils/helpers';
import {palette} from '../../utils/colors';
import {spacing}   from '../../utils/dim';

import { SET_TO_5 } from '../../constants/numeric.constants';

const {
  lenurple, middlePurple, relaxingGreen,
  black, white,
  weightedGammaAdjustedAverageGrey
} = palette;

export const generateCSS = (byThePowerOfGreyscale = false) => {
  console.log('Inside generateCSS for Timing Buttons, ', byThePowerOfGreyscale);
  const baseStyles = {
    timerOptionButton: {
      borderColor: byThePowerOfGreyscale ? white : relaxingGreen,
      margin: SET_TO_5 * 2
    },
    timerOptionsWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    buttonTextColor: {
      color: byThePowerOfGreyscale ? white : relaxingGreen
    }
  };

 return createStylesheet(baseStyles);
};