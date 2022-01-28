"use strict";
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
const React = __importStar(require("react"));
const react_if_1 = require("react-if");
const react_native_1 = require("react-native");
const react_native_elements_1 = require("react-native-elements");
const react_redux_1 = require("react-redux");
const Componets_1 = require("../../Componets");
const Themes_1 = require("../../Themes");
const Metrics_1 = __importDefault(require("../../Themes/Metrics"));
const Utils_1 = require("../../Utils");
const SideMenuList_1 = __importDefault(require("./SideMenuList"));
const RenderSettingOption = (props) => {
    const { item } = props;
    const { titleStyle = {}, onPress } = item;
    const dispatch = (0, react_redux_1.useDispatch)();
    return (<react_native_elements_1.ListItem Component={react_native_1.TouchableOpacity} containerStyle={{
            paddingHorizontal: Themes_1.Metrics.doubleBaseMargin + 10,
            borderColor: Themes_1.Colors.blue,
        }} {...item} titleStyle={{
            fontWeight: react_native_1.Platform.OS === 'android' ? '600' : 'bold',
            fontSize: Themes_1.Fonts.size.medium,
            color: Themes_1.Colors.black,
            ...titleStyle,
        }} onPress={() => {
            if (item['title'] === 'Home') {
                dispatch(() => { });
            }
            onPress(dispatch);
        }}/>);
};
const RenderSectionTitle = (props) => {
    const { section } = props;
    return (<react_if_1.If condition={section.showHeader}>
          <react_if_1.Then>
        <>
          <react_native_1.View style={{
            paddingBottom: Themes_1.Metrics.baseMargin,
            paddingHorizontal: Themes_1.Metrics.doubleBaseMargin,
            ...(!(0, Utils_1.isEmptyOrNil)(section.title) && {
                paddingTop: Themes_1.Metrics.doubleBaseMargin * 2,
                paddingBottom: Themes_1.Metrics.doubleBaseMargin,
            }),
        }}>
            <Componets_1.AppSectionTitle style={{
            color: Themes_1.Colors.black,
            fontSize: Themes_1.Fonts.size.small,
            textTransform: 'uppercase',
            letterSpacing: 1.5,
        }}>
              {section.title}
            </Componets_1.AppSectionTitle>
          </react_native_1.View>
          <react_if_1.If condition={!(0, Utils_1.isEmptyOrNil)(section.title)}>
              <react_if_1.Then>
                <react_native_elements_1.Divider style={{ backgroundColor: Themes_1.Colors.borderColor, height: 0.5 }}/>
            </react_if_1.Then>
          </react_if_1.If>
        </>
        </react_if_1.Then>
      </react_if_1.If>);
};
const SideDrawer = (props) => {
    return (<react_native_1.View style={{ flex: 1 }}>
            <react_native_1.View style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomColor: Themes_1.Colors.borderColor,
            borderBottomWidth: 0.2,
            height: 175,
        }}>
                <react_native_1.Image source={Themes_1.Images.appLogo} style={{
            width: 150,
            height: 115,
            padding: Metrics_1.default.doubleBaseMargin * 2
        }}/>
            </react_native_1.View>

            <react_native_1.SectionList sections={SideMenuList_1.default} keyExtractor={(item, index) => item + "" + index} renderItem={({ item, index, section }) => {
            const { data = [] } = section;
            return (<>
                    <RenderSettingOption item={item}/>
                    {!section.hideLastSeparator && index == data.length - 1 && (<react_native_elements_1.Divider style={{ backgroundColor: Themes_1.Colors.borderColor, height: 0.5 }}/>)}
                    </>);
        }} renderSectionHeader={({ section }) => (<RenderSectionTitle section={section}/>)} ItemSeparatorComponent={() => (<react_native_elements_1.Divider style={{ backgroundColor: Themes_1.Colors.borderColor, height: 0.5 }}/>)} showsVerticalScrollIndicator={false} stickySectionHeadersEnabled={false} scrollEnabled={true}/>
        </react_native_1.View>);
};
exports.default = SideDrawer;
//# sourceMappingURL=SideDrawer.js.map