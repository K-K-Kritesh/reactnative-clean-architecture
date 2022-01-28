"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = require("@react-navigation/native");
require("react-native-gesture-handler");
const react_native_1 = require("react-native");
const React = __importStar(require("react"));
const react_native_2 = require("react-native");
const NewAppScreen_1 = require("react-native/Libraries/NewAppScreen");
const react_redux_1 = require("react-redux");
const store_1 = __importDefault(require("./Redux/store"));
const react_1 = require("react");
const Navigations_1 = require("./Navigations");
const Componets_1 = require("./Componets");
const Services_1 = require("./Services");
const Section = ({ children, title }) => {
    const isDarkMode = (0, react_native_2.useColorScheme)() === 'dark';
    return (<react_native_2.View style={styles.sectionContainer}>
      <react_native_2.Text style={[
            styles.sectionTitle,
            {
                color: isDarkMode ? NewAppScreen_1.Colors.white : NewAppScreen_1.Colors.black,
            },
        ]}>
        {title}
      </react_native_2.Text>
      <react_native_2.Text style={[
            styles.sectionDescription,
            {
                color: isDarkMode ? NewAppScreen_1.Colors.light : NewAppScreen_1.Colors.dark,
            },
        ]}>
        {children}
      </react_native_2.Text>
    </react_native_2.View>);
};
const AppContainer = (props) => {
    const ref = React.useRef(null);
    React.useEffect(() => {
        if (!__DEV__) {
            console.log = () => { };
        }
        Services_1.NavigationService.setTopLevelNavigator(ref);
    });
    return (<react_1.Fragment>
      <native_1.NavigationContainer ref={ref}>
        <Navigations_1.AppNavigator />
      </native_1.NavigationContainer>
    </react_1.Fragment>);
};
const App = () => {
    react_native_1.LogBox.ignoreLogs([
        "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
    ]);
    const isDarkMode = (0, react_native_2.useColorScheme)() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? NewAppScreen_1.Colors.darker : NewAppScreen_1.Colors.lighter,
    };
    return (<react_redux_1.Provider store={store_1.default}>
      <react_native_2.StatusBar backgroundColor={NewAppScreen_1.Colors.status} barStyle="default"/>
      <react_native_2.SafeAreaView style={{ flex: 0, backgroundColor: NewAppScreen_1.Colors.status }}/>
      <react_native_2.SafeAreaView style={{
            flex: 1,
            backgroundColor: NewAppScreen_1.Colors.white,
        }}>
          <Componets_1.AppScreenLoader />
          <AppContainer />

        </react_native_2.SafeAreaView>
      </react_redux_1.Provider>);
};
const styles = react_native_2.StyleSheet.create({
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
exports.default = App;
//# sourceMappingURL=App.js.map