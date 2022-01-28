import * as React from 'react';
import { If, Then } from 'react-if';
import { Platform, SectionList, View, Image, TouchableOpacity } from "react-native";
import { ListItem, Divider } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { AppSectionTitle, AppText } from '../../Componets';
import { Colors, Fonts, Images, Metrics } from '../../Themes';
import metrics from '../../Themes/Metrics';
import { isEmptyOrNil } from '../../Utils';
import SIDE_MENU_LIST from './SideMenuList';

const RenderSettingOption = (props) => {
    const { item } = props;
    const { titleStyle = {}, onPress } = item;
    
    const dispatch = useDispatch();
    return (
      <ListItem
        Component={TouchableOpacity}
        containerStyle={{
          paddingHorizontal: Metrics.doubleBaseMargin+10,
          borderColor: Colors.blue,
        }}
        {...item}
        titleStyle={{
          fontWeight: Platform.OS === 'android' ? '600' : 'bold',
          fontSize: Fonts.size.medium,
          color: Colors.black,
          ...titleStyle,
        }}
        onPress={() => {
          if(item['title'] === 'Home'){
            dispatch(()=>{});
          }
          onPress(dispatch)
        }}
      />
    );
  };

  const RenderSectionTitle = (props) => {
    const { section } = props;
  
    return (
      <If condition={section.showHeader}>
          <Then>
        <>
          <View
            style={{
              paddingBottom: Metrics.baseMargin,
              paddingHorizontal: Metrics.doubleBaseMargin,
              ...(!isEmptyOrNil(section.title) && {
                paddingTop: Metrics.doubleBaseMargin * 2,
                paddingBottom: Metrics.doubleBaseMargin,
              }),
            }}>
            <AppSectionTitle
              style={{
                color: Colors.black,
                fontSize: Fonts.size.small,
                textTransform: 'uppercase',
                letterSpacing: 1.5,
              }}>
              {section.title}
            </AppSectionTitle>
          </View>
          <If condition={!isEmptyOrNil(section.title)}>
              <Then>
                <Divider style={{ backgroundColor: Colors.borderColor, height: 0.5 }} />
            </Then>
          </If>
        </>
        </Then>
      </If>
    );
  };

const SideDrawer = (props) => { 
    return(
        <View style={{flex: 1}}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomColor: Colors.borderColor,
                borderBottomWidth: 0.2,
                height: 175,
            }}>
                <Image
                    source={Images.appLogo}
                    style={{
                        width: 150,
                        height: 115,
                        padding: metrics.doubleBaseMargin * 2
                    }}
                    />
            </View>

            <SectionList
                sections={SIDE_MENU_LIST}
                keyExtractor={(item, index) => item+""+index}
                renderItem={({ item, index, section }) => {
                const { data = [] } = section;
                return (
                    <>
                    <RenderSettingOption item={item} />
                    {!section.hideLastSeparator && index == data.length - 1 && (
                        <Divider
                        style={{ backgroundColor: Colors.borderColor, height: 0.5 }}
                        />
                    )}
                    </>
                );
                }}
                renderSectionHeader={({ section }) => (
                <RenderSectionTitle section={section} />
                )}
                ItemSeparatorComponent={() => (
                <Divider style={{ backgroundColor: Colors.borderColor, height: 0.5 }} />
                )}
                showsVerticalScrollIndicator={false}
                stickySectionHeadersEnabled={false}
                scrollEnabled={true}
            />
        </View>
    );
};

export default SideDrawer;