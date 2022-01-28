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
const MaterialCommunityIcons_1 = __importDefault(require("react-native-vector-icons/MaterialCommunityIcons"));
const AntDesign_1 = __importDefault(require("react-native-vector-icons/AntDesign"));
const Themes_1 = require("../../Themes");
const Services_1 = require("../../Services");
const SIDE_MENU_LIST = [
    {
        title: '',
        showHeader: false,
        data: [
            {
                key: "0",
                leftElement: <MaterialCommunityIcons_1.default name="home" size={21} color={Themes_1.Colors.black}/>,
                // rightElement: (
                //   <Icon name="chevron-right" size={21} color={Colors.black} />
                // ),
                title: 'Home',
                value: 'Home',
                onPress: () => {
                    Services_1.NavigationService.navigate("Notifications");
                },
                bottomDivider: true,
            },
            {
                key: "1",
                leftElement: <MaterialCommunityIcons_1.default name="login" size={21} color={Themes_1.Colors.black}/>,
                // rightElement: (
                //   <Icon name="chevron-right" size={21} color={Colors.black} />
                // ),
                title: 'Login',
                value: 'Home',
                onPress: () => { },
                bottomDivider: true,
            },
            {
                key: "2",
                leftElement: (<AntDesign_1.default name="adduser" size={21} color={Themes_1.Colors.black}/>),
                // rightElement: (
                //   <Icon name="chevron-right" size={21} color={Colors.black} />
                // ),
                title: 'Sign Up',
                value: 'Home',
                onPress: () => { },
                bottomDivider: true,
            },
        ],
    },
];
exports.default = SIDE_MENU_LIST;
//# sourceMappingURL=SideMenuList.js.map