import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../Themes';
import {NavigationService} from '../../Services';
import { AppText } from '../../Componets';

type SideMenuList = Array<{

  title: string;
  showHeader?: boolean;
  hideLastSeparator?: boolean;
  data: Array<{
    key: string,
    title: string;
    value: string;
    leftElement?: any;
    rightElement?: any;
    onPress(params): void;
    titleStyle?: object;
    bottomDivider?: boolean;
  }>;
}>;

const SIDE_MENU_LIST: SideMenuList = [
  {
    title: '',
    showHeader: false,
    data: [
      {
        key: "0",
        leftElement: <Icon name="home" size={21} color={Colors.black} />,
        // rightElement: (
        //   <Icon name="chevron-right" size={21} color={Colors.black} />
        // ),
        title: 'Home',
        value: 'Home',
        onPress: () => {
           NavigationService.navigate("Notifications");
        },
        bottomDivider: true,
      },
      {
        key: "1",
        leftElement: <Icon name="login" size={21} color={Colors.black} />,
        // rightElement: (
        //   <Icon name="chevron-right" size={21} color={Colors.black} />
        // ),
        title: 'Login',
        value: 'Home',
        onPress: () => {},
        bottomDivider: true,
      },
      {
        key: "2",
        leftElement: (
          <AntDesignIcon name="adduser" size={21} color={Colors.black} />
        ),
        // rightElement: (
        //   <Icon name="chevron-right" size={21} color={Colors.black} />
        // ),
        title: 'Sign Up',
        value: 'Home',
        onPress: () => {},
        bottomDivider: true,
      },
    ],
  },
];

export default SIDE_MENU_LIST;
