import {createStylesheet} from '../../utils/helpers';
import {palette} from '../../utils/colors';

const {
  black, white,
  relaxingGreen
} = palette;

export const generateCSS = (showAppInGreyScale, size) => {
  const baseStyles = {
    radius: {
      alignItems: "center",
      borderColor: showAppInGreyScale ? white : relaxingGreen,
      borderRadius: size / 2,
      borderWidth: 2,
      justifyContent: "center",
      height: size,
      width: size,
    },
    text: {
      color: showAppInGreyScale ? white : relaxingGreen,
      fontSize: size / 3,
      textAlign: "center",
    },
  };

 return createStylesheet(baseStyles);
};