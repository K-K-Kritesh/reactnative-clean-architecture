import * as React from 'react';
import { If, Then } from 'react-if';
import { Button, Platform, SectionList, TouchableOpacity, View } from "react-native";
import { ListItem } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { AppSectionTitle, AppText } from '../../Componets';
import { NavigationService } from '../../Services';
import { Colors, Fonts, Metrics } from '../../Themes';
import { isEmptyOrNil } from '../../Utils';
import SIDE_MENU_LIST from '../AppSideDrawer/SideMenuList';



const HomeScreen = (props) => {

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => NavigationService.navigate("Notifications")}
        title="Go to notification"
      />
    
    </View>
    )
};

export default HomeScreen;