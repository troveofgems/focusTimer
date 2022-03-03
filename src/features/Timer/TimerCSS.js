import {createStylesheet} from '../../utils/helpers';
import {palette} from '../../utils/colors';
import {spacing}   from '../../utils/dim';

const {
  lenurple, middlePurple, relaxingGreen,
  black, white,
  weightedGammaAdjustedAverageGrey
} = palette;

export const generateCSS = (byThePowerOfGreyscale = false) => {
  const baseStyles = {
    actionButton: {
      borderColor: byThePowerOfGreyscale ? white : relaxingGreen,
      margin: 10,
    },
    resetActionBtn: {
      borderColor: byThePowerOfGreyscale ? white : lenurple,
      margin: 10,
    },
    buttonWrapper: {
      flex: 0.3,
      padding: 15,
      alignItems: 'center',
      justifyContent: 'center'
    },
    container: {
      backgroundColor: byThePowerOfGreyscale ? black : white,
      flex: 1,
      paddingTop: spacing.xxl
    },
    countdown: {
      flex: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    focusActionButtons: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    progressBarWrapper: {
      paddingTop: spacing.lg
    },
    title: {
      color: byThePowerOfGreyscale ? white : black,
      textAlign: 'center',
    },
    task: {
      color: byThePowerOfGreyscale ? white : black,
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 24,
      paddingTop: 4
    },
    buttonTextColor: {
      color: byThePowerOfGreyscale ? white : relaxingGreen,
    },
    resetBtnTextColor: {
      color: byThePowerOfGreyscale ? white : lenurple,
    }
  };

 return createStylesheet(baseStyles);
};