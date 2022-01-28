import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';

import {Colors} from '../../Themes';
import {NavigationService} from '../../Services';


type SideMenuList = Array<{
  title: string;
  showHeader?: boolean;
  hideLastSeparator?: boolean;
  data: Array<{
    title: string;
    leftElement?: any;
    rightElement?: any;
    onPress(params): void;
    titleStyle?: object;
    bottomDivider?: boolean;
  }>;
}>;

const LOGGEDIN_SIDE_MENU_LIST: SideMenuList = [
  {
    title: '',
    showHeader: false,
    data: [
      {
        leftElement: <Icon name="home" size={21} color={Colors.black} />,
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
        leftElement: (
          <Icon name="account-settings" size={21} color={Colors.black} />
        ),
        // rightElement: (
        //   <Icon name="chevron-right" size={21} color={Colors.black} />
        // ),
        title: 'Profile',
        onPress: () =>
          {},
        bottomDivider: true,
      },
      {
        leftElement: <Icons name="settings" size={21} color={Colors.black} />,
        // rightElement: (
        //   <Icon name="chevron-right" size={21} color={Colors.black} />
        // ),
        title: 'Settings',
        onPress: () => {},
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
        leftElement: <Icon name="logout" size={21} color={Colors.black} />,
        title: 'Log Out',
        onPress: (param) => {},
        //onPress: (param) => NavigationService.navigate('Profile'),
        titleStyle: {
          // color: Colors.error,
          // fontWeight: 'bold'
        },
      },
    ],
  },
   
];

export default LOGGEDIN_SIDE_MENU_LIST;
