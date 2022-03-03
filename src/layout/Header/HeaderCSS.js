import {createStylesheet} from '../../utils/helpers';
import {palette} from '../../utils/colors';

const {
  middlePurple,
  black, white,
  weightedGammaAdjustedAverageGrey
} = palette;

export const generateCSS = (byThePowerOfGreyscale = false) => {
  const baseStyles = {
    header: {
      alignItems: "center",
      backgroundColor: byThePowerOfGreyscale ? weightedGammaAdjustedAverageGrey : middlePurple,
    },
    text: {
      color: byThePowerOfGreyscale ? black : white,
      fontSize: 24,
      fontWeight: "bold",
      letterSpacing: .5,
      padding: 10
    }
  };

 return createStylesheet(baseStyles);
};