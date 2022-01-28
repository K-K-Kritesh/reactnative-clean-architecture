import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  screenHorizontalPadding: 30,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width,
  screenHeight: height,
  navBarHeight: Platform.OS === 'ios' ? 64 : 50,
  buttonRadius: 4,
  icons: {
    extraSmall: 12,
    tiny: 15,
    avg: 17.5,
    small: 20,
    regular: 25,
    medium: 30,
    semiLarge: 35,
    large: 45,
    xl: 50,
    xxl: 60,
  },
  images: {
    small: 20,
    regular: 25,
    medium: 40,
    large: 60,
    logo: 200,
  },
};

export default metrics;
