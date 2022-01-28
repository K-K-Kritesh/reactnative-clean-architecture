import * as React from 'react';
import { Button, View } from "react-native";
import { NavigationService } from '../../Services';

const Notifications = (props) => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => NavigationService.goBackToPreviousScreen()}
        title="Go to Back"
      />
    </View>
    )
};

export default Notifications;