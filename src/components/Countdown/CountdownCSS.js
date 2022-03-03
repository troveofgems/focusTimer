import {createStylesheet} from '../../utils/helpers';
import {palette} from '../../utils/colors';
import {spacing, fontSizes} from '../../utils/dim';

const {
  white,
  transparent30_darkgrey, transparent30_darkblue, transparent30_relaxingGreen
} = palette;

export const generateCSS = (byThePowerOfGreyscale = false) => {
  const baseStyles = {
    text: {
      backgroundColor: byThePowerOfGreyscale ? transparent30_darkgrey : transparent30_relaxingGreen,
      color: white,
      fontSize: fontSizes.xxxl,
      fontWeight: 'bold',
      padding: spacing.lg,
      textAlign: 'center',
    }
  };

 return createStylesheet(baseStyles);
};