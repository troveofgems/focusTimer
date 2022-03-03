import {createStylesheet} from '../../utils/helpers';
import {palette} from '../../utils/colors';

const {
  lenurple, middlePurple, relaxingGreen,
  black, white,
  weightedGammaAdjustedAverageGrey
} = palette;

export const generateCSS = (byThePowerOfGreyscale = false) => {
  const baseStyles = {
    focusComponent: {
      backgroundColor: byThePowerOfGreyscale ? black : white,
      padding: 15
    },
    componentTitle: {
      color: byThePowerOfGreyscale ? white : lenurple,
      fontSize: 24,
      fontWeight: "bold",
      paddingTop: 20,
      paddingBottom: 20
    },
    inputLayoutContainer: {
      alignItems: "center",
      flexDirection: "row"
    },
    inputTextContainer: {
      flex: 1,
      marginRight: 10
    }
  };

 return createStylesheet(baseStyles);
};