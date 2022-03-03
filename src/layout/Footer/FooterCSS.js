import {createStylesheet} from '../../utils/helpers';
import {palette} from '../../utils/colors';

const {
  lenurple,
  black, white,
  weightedGammaAdjustedAverageGrey
} = palette;

export const generateCSS = (byThePowerOfGreyscale = false) => {
  const baseStyles = {
    footer: {
      alignItems: "center",
      backgroundColor: byThePowerOfGreyscale ? weightedGammaAdjustedAverageGrey : lenurple,
      justifyContent: "flex-end",
    },
    text: {
      color: black,
      fontWeight: "boldr",
      letterSpacing: .5,
      padding: 10
    }
  };

 return createStylesheet(baseStyles);
};