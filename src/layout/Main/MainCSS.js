import {createStylesheet} from '../../utils/helpers';
import {palette} from '../../utils/colors';

  const {
    black, lenurple,
    weightedGammaAdjustedAverageGrey
  } = palette;

export const generateCSS = (byThePowerOfGreyscale = false) => {
  const baseStyles = {
    mainView: {
     flex: 1
    },
    text: {
      color: black,
      fontSize: 24,
      fontWeight: "bold",
      letterSpacing: .5,
      padding: 10
    }
  };

 return createStylesheet(baseStyles);
};