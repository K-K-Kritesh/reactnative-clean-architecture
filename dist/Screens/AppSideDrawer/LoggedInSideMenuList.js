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
const MaterialIcons_1 = __importDefault(require("react-native-vector-icons/MaterialIcons"));
const Themes_1 = require("../../Themes");
const LOGGEDIN_SIDE_MENU_LIST = [
    {
        title: '',
        showHeader: false,
        data: [
            {
                leftElement: <MaterialCommunityIcons_1.default name="home" size={21} color={Themes_1.Colors.black}/>,
                // rightElement: (
                //   <Icon name="chevron-right" size={21} color={Colors.black} />
                // ),
                title: 'Home',
                onPress: () => {
                    //NavigationService.goBackToPreviousScreen();
                },
                //onPress: () => console.log('Home page'),
                bottomDivider: true,
            },
            {
                leftElement: (<MaterialCommunityIcons_1.default name="account-settings" size={21} color={Themes_1.Colors.black}/>),
                // rightElement: (
                //   <Icon name="chevron-right" size={21} color={Colors.black} />
                // ),
                title: 'Profile',
                onPress: () => { },
                bottomDivider: true,
            },
            {
                leftElement: <MaterialIcons_1.default name="settings" size={21} color={Themes_1.Colors.black}/>,
                // rightElement: (
                //   <Icon name="chevron-right" size={21} color={Colors.black} />
                // ),
                title: 'Settings',
                onPress: () => { },
                bottomDivider: true,
            },
            // {
            //   leftElement: (
            //     <Icons name="description" size={21} color={Colors.black} />
            //   ),
            //   // rightElement: (
            //   //   <Icon name="chevron-right" size={21} color={Colors.black} />
            //   // ),
            //   title: 'NFL Draft Cheat Sheet',
            //   onPress: () =>
            //     NavigationService.navigate(APP_ROUTES.DRAFT_CHEAT_STACK, {
            //       type: 'draft',
            //       game: 'nfl',
            //     }),
            //   bottomDivider: true,
            // },
            // {
            //   leftElement: (
            //     <Icons name="description" size={21} color={Colors.black} />
            //   ),
            //   // rightElement: (
            //   //   <Icon name="chevron-right" size={21} color={Colors.black} />
            //   // ),
            //   title: 'NBA Draft Cheat Sheet',
            //   onPress: () =>
            //     NavigationService.navigate(APP_ROUTES.DRAFT_NBA_CHEAT_STACK, {
            //       type: 'draft',
            //       game: 'nba',
            //     }),
            //   bottomDivider: true,
            // },
            // {
            //   leftElement: <TeamSelectedSvgIcon fillColor={Colors.black} />,
            //   // rightElement: (
            //   //   <Icon name="chevron-right" size={21} color={Colors.black} />
            //   // ),
            //   title: 'Teams',
            //   onPress: () => NavigationService.navigate(APP_ROUTES.TEAM_STACK),
            //   bottomDivider: true,
            // },
        ],
    },
    {
        title: '',
        showHeader: false,
        hideLastSeparator: true,
        data: [
            {
                leftElement: <MaterialCommunityIcons_1.default name="logout" size={21} color={Themes_1.Colors.black}/>,
                title: 'Log Out',
                onPress: (param) => { },
                //onPress: (param) => NavigationService.navigate('Profile'),
                titleStyle: {
                // color: Colors.error,
                // fontWeight: 'bold'
                },
            },
        ],
    },
];
exports.default = LOGGEDIN_SIDE_MENU_LIST;
//# sourceMappingURL=LoggedInSideMenuList.js.map