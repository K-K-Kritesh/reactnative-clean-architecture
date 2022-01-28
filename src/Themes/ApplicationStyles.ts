import Fonts from './Fonts';
import Metrics from './Metrics';
import Colors from './Colors';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screenContainer: {
    flex: 1,
    paddingHorizontal: Metrics.doubleBaseMargin - 5,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  shadowContainer: {
    shadowColor: Colors.lightGrey, // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 0.75, // IOS
    shadowRadius: 1, //IOS
    //backgroundColor: Colors.white,
    elevation: 2, // Android
  },
};

export default ApplicationStyles;
