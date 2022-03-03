import {createStylesheet} from '../../utils/helpers';
import {palette} from '../../utils/colors';

const {
  lenurple, middlePurple, relaxingGreen,
  black, white,
  weightedGammaAdjustedAverageGrey
} = palette;

export const generateCSS = (byThePowerOfGreyscale = false) => {
  const baseStyles = {
    focusHistoryComponent: {
      backgroundColor: byThePowerOfGreyscale ? black : white,
      flex: 1
    },
    historyTitle: {
      color: byThePowerOfGreyscale ? white : lenurple,
      fontSize: 24,
      fontWeight: "bold",
      padding: 15
    },
    historyItem: {
      color: byThePowerOfGreyscale ? white : middlePurple,
      fontSize: 18,
      fontWeight: "bold",
      padding: 15
    },
    item: {
      color: byThePowerOfGreyscale ? white : middlePurple,
      fontSize: 18,
      paddingBottom: 2,
      paddingTop: 2,
      paddingLeft: 15
    }
  };

 return createStylesheet(baseStyles);
};