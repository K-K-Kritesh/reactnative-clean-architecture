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
exports.ScrollContainer = exports.AddElementShadow = exports.RoundedBadgeContainer = exports.RowContainer = exports.AppScreenTitleContainer = exports.AppTextExtraSmall = exports.AppText = exports.SectionTitle = exports.AppHeading = exports.AppSectionTitle = exports.AppScreenTitle = exports.ScreenContainer = exports._Text = void 0;
const React = __importStar(require("react"));
const native_1 = __importDefault(require("styled-components/native"));
const react_native_1 = require("react-native");
const ramda_1 = require("ramda");
const Themes_1 = require("../../Themes");
const FONT_WEIGHT = react_native_1.Platform.OS === 'android' ? '400' : 'bold';
const FONT_SIZE = react_native_1.Platform.OS === 'android' ? Themes_1.Fonts.size.small : Themes_1.Fonts.size.medium;
const _Text = (props) => (<react_native_1.Text {...props} maxFontSizeMultiplier={1.1}>
    {props.children}
  </react_native_1.Text>);
exports._Text = _Text;
exports.ScreenContainer = (0, native_1.default)(react_native_1.View) `
  flex: 1;
  padding-horizontal: ${(props) => (0, ramda_1.propOr)(Themes_1.Metrics.doubleBaseMargin - 5, 'paddingHorizontal', props)};
  padding-vertical: ${(props) => (0, ramda_1.propOr)(0, 'paddingVertical', props)};
  margin-vertical: ${(props) => (0, ramda_1.propOr)(0, 'paddingVertical', props)};
  background-color: ${(props) => (0, ramda_1.propOr)(Themes_1.Colors.white, 'backgroundColor', props)};
`;
exports.AppScreenTitle = (0, native_1.default)(exports._Text) `
  font-weight: ${(props) => (0, ramda_1.propOr)(FONT_WEIGHT, 'fontWeight', props)};
  font-size: ${(props) => (0, ramda_1.propOr)(Themes_1.Fonts.size.h1, 'fontSize', props)};
  padding-vertical: ${(props) => (0, ramda_1.propOr)(0, 'paddingVertical', props)};
  padding-horizontal: ${(props) => (0, ramda_1.propOr)(0, 'paddingHorizontal', props)};
  color: ${(props) => (0, ramda_1.propOr)(Themes_1.Colors.primaryText, 'color', props)};
  font-family: TTCommons-DemiBold;
  text-transform: ${(props) => (0, ramda_1.propOr)('none', 'textTransform', props)};
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign}` : '')}
`;
exports.AppSectionTitle = (0, native_1.default)(exports._Text) `
  padding-top: ${(props) => (0, ramda_1.propOr)(0, 'paddingTop', props)};
  padding-bottom: ${(props) => (0, ramda_1.propOr)(0, 'paddingBottom', props)};
  font-size: ${(props) => (0, ramda_1.propOr)(Themes_1.Fonts.size.h2, 'fontSize', props)};
  padding-right: ${(props) => (0, ramda_1.propOr)(0, 'paddingRight')(props)};
  font-weight: ${(props) => (0, ramda_1.propOr)(FONT_WEIGHT, 'fontWeight', props)};
  font-family: TTCommons-DemiBold;
  color: ${(props) => (0, ramda_1.propOr)(Themes_1.Colors.primaryText, 'color', props)};
  text-transform: ${(props) => (0, ramda_1.propOr)('none', 'textTransform', props)};
  text-align: ${(props) => (0, ramda_1.propOr)('left', 'textAlign', props)};
  width: ${(props) => (0, ramda_1.propOr)('auto', 'width', props)};
`;
exports.AppHeading = (0, native_1.default)(exports._Text) `
  padding-top: ${(props) => (0, ramda_1.propOr)(5, 'paddingTop', props)};
  padding-bottom: ${(props) => (0, ramda_1.propOr)(0, 'paddingBottom', props)};
  padding-right: ${(props) => (0, ramda_1.propOr)(0, 'paddingRight')(props)};
  padding-left: ${(props) => (0, ramda_1.propOr)(0, 'paddingLeft')(props)};
  font-size: ${(props) => (0, ramda_1.propOr)(FONT_SIZE, 'fontSize', props)};
  font-weight: ${FONT_WEIGHT};
  font-family: TTCommons-DemiBold;
  color: ${(props) => (0, ramda_1.propOr)(Themes_1.Colors.primaryText, 'color', props)};
  text-transform: ${(props) => (0, ramda_1.propOr)('none', 'textTransform', props)};
  text-align: ${(props) => (0, ramda_1.propOr)('left', 'textAlign', props)};
  width: ${(props) => (0, ramda_1.propOr)('auto', 'width', props)};
`;
exports.SectionTitle = (0, native_1.default)(exports._Text) `
  font-size: ${(props) => (0, ramda_1.propOr)(Themes_1.Fonts.size.regular, 'fontSize', props)};
  font-weight: ${(props) => (0, ramda_1.propOr)(FONT_WEIGHT, 'fontWeight')(props)};
  font-family: TTCommons-DemiBold;
  text-align: ${(props) => (0, ramda_1.propOr)('left', 'textAlign')(props)};
  flex: 1;
  flex-direction: row;
  color: ${(props) => (0, ramda_1.propOr)('black', 'color', props)};
`;
exports.AppText = (0, native_1.default)(exports._Text) `
  padding-top: ${(props) => (0, ramda_1.propOr)(0, 'paddingTop')(props)};
  padding-left: ${(props) => (0, ramda_1.propOr)(0, 'paddingLeft')(props)};
  padding-right: ${(props) => (0, ramda_1.propOr)(0, 'paddingRight')(props)};
  padding-bottom: ${(props) => (0, ramda_1.propOr)(0, 'paddingBottom')(props)};
  font-size: ${(props) => (0, ramda_1.propOr)(FONT_SIZE, 'fontSize', props)};
  font-family: ${(props) => (0, ramda_1.propOr)('TTCommons-Regular', 'fontFamaliy')(props)};
  font-weight: ${(props) => (0, ramda_1.propOr)('300', 'fontWeight')(props)};
  color: ${(props) => (0, ramda_1.propOr)(Themes_1.Colors.primaryText, 'color', props)};
  text-decoration-line: ${(props) => (0, ramda_1.propOr)('none', 'textDecorationLine')(props)};
  text-transform: ${(props) => (0, ramda_1.propOr)('none', 'textTransform', props)};
  width: ${(props) => (0, ramda_1.propOr)('auto', 'width', props)};
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign}` : '')}
`;
exports.AppTextExtraSmall = (0, native_1.default)(exports._Text) `
  font-size: ${Themes_1.Fonts.size.extraSmall};
  color: ${(props) => !(0, ramda_1.isNil)(props.color) ? Themes_1.Colors[props.color] : Themes_1.Colors.primaryText};
  font-family: TTCommons-Regular;
`;
const AppScreenTitleContainer = (props) => {
    const { customStyle = {} } = props;
    return (<react_native_1.View style={{
            paddingVertical: Themes_1.Metrics.baseMargin,
            paddingHorizontal: Themes_1.Metrics.doubleBaseMargin - 2,
            ...customStyle,
        }}>
      {props.children}
    </react_native_1.View>);
};
exports.AppScreenTitleContainer = AppScreenTitleContainer;
exports.RowContainer = (0, native_1.default)(react_native_1.View) `
  margin-vertical: ${(props) => (0, ramda_1.propOr)(0, 'marginVertical', props)};
  padding-horizontal: ${(props) => (0, ramda_1.propOr)(0, 'paddingHorizontal', props)};
  width: ${(props) => (0, ramda_1.propOr)('auto', 'width', props)};
  justify-content: ${(props) => (0, ramda_1.propOr)('flex-start', 'justifyContent', props)};
  align-items: ${(props) => (0, ramda_1.propOr)('flex-start', 'alignItems', props)};
  flex-direction: ${(props) => (0, ramda_1.propOr)('row', 'flexDirection', props)};
  margin-top: ${(props) => (0, ramda_1.propOr)(0, 'marginTop', props)};
  border-radius: ${(props) => (0, ramda_1.propOr)(0, 'borderRadius', props)};
  background-color: ${(props) => (0, ramda_1.propOr)('transparent', 'backgroundColor', props)};
  ${(props) => ((0, ramda_1.has)('flex', props) ? `flex: ${props.flex}` : '')}
`;
exports.RoundedBadgeContainer = (0, native_1.default)(react_native_1.TouchableOpacity) `
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5;
  padding-horizontal: 10;
  padding-vertical: 5;
  background-color: ${Themes_1.Colors.white};
  border-width: 0.5px;
  border-color: ${Themes_1.Colors.lightGrey};

  shadow-color: ${(props) => (0, ramda_1.propOr)(Themes_1.Colors.lightGrey, 'color', props)};
  shadow-offset: 0.5px 2px;
  shadow-opacity: 0.75;
  shadow-radius: 2;
  elevation: 2;
`;
const AddElementShadow = (options) => {
    const { shadowColor = Themes_1.Colors.darkGrey, shadowOffset = '0px 2px', shadowOpacity = 0.4, shadowRadius = 1, elevation = 2, backgroundColor = Themes_1.Colors.white, } = options || {};
    return `
  background-color: ${backgroundColor};
  shadow-color: ${shadowColor};
  shadow-offset: ${shadowOffset};
  shadow-opacity: ${shadowOpacity};
  shadow-radius: ${shadowRadius};
  elevation: ${elevation};
  `;
};
exports.AddElementShadow = AddElementShadow;
exports.ScrollContainer = native_1.default.ScrollView `
  flex: 1;
`;
//# sourceMappingURL=AppStyledComponents.js.map