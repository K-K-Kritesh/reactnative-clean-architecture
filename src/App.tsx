/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import { LogBox } from 'react-native';
import * as React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { Fragment } from 'react';
import { AppNavigator } from './Navigations';
import { AppScreenLoader } from './Componets';
import { NavigationService } from './Services';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};


const AppContainer = (props) => {
  const ref = React.useRef(null)

  React.useEffect(() => {
    if (!__DEV__) {
      console.log = () => {};
    }
    NavigationService.setTopLevelNavigator(ref);
  });

  return (
    <Fragment>
      <NavigationContainer ref={ref}>
        <AppNavigator />
      </NavigationContainer>
    </Fragment>
  )
}



const App = () => {

  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={Colors.status} barStyle="default" />
      <SafeAreaView style={{flex: 0, backgroundColor: Colors.status}} />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.white,
        }}>
          <AppScreenLoader />
          <AppContainer/>

        </SafeAreaView>
      </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
