import * as React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer"
import 'react-native-gesture-handler'
import HomeScreen from "../Screens/App/HomeScreen"
import Notifications from "../Screens/App/Notofication"
import { SideDrawer } from '../Screens/AppSideDrawer';


const Drawer = createDrawerNavigator()
const AppNavigator = (props) => {
    return(
      <Drawer.Navigator drawerContent={(props) => <SideDrawer {...props} /> } >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={Notifications} />
        <Drawer.Screen name="Notificationsd" component={Notifications} />
      </Drawer.Navigator>
      
    )
}

export default AppNavigator;