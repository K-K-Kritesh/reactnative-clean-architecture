import { CommonActions, StackActions } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/core';
import { defaultTo } from 'ramda';

import { generateUUID } from '../Utils';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef.current;
}

function push(routeName: string, params?: object) {
  //console.log('navigating to:', routeName);
  try {
    _navigator.dispatch(StackActions.push(routeName, defaultTo({}, params)));
  } catch (error) {
    // console.log('error in navigation', error)
  }
}

function navigate(name: string, params?: object) {
  //console.log('navigating to:', name);
  try {
    _navigator.dispatch(CommonActions.navigate(name, defaultTo({}, params)));
  } catch (error) {
    // console.log('error in navigation', error)
  }
}

function popScreen(noOfScreensToPop?: number) {
  //console.log('noOfScreensToPop :', noOfScreensToPop);
  try {
    _navigator.dispatch({
      ...StackActions.pop(noOfScreensToPop),
    });
  } catch (error) {
    // console.log('error in navigation', error)
  }
}

function replaceScreen(routeName: string, params?: object) {
  // console.log('navigating to:', routeName)
  try {
    _navigator.dispatch(StackActions.replace(routeName, params));
  } catch (error) {
    // console.log('error in navigation', error)
  }
}

function resetStack(routeName) {
  // console.log('Reset Stack:')
  try {
    _navigator.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: routeName },
        ],
      }));
  } catch (error) {
    // console.log('error in navigation', error)
  }
}

function goBackToPreviousScreen() {
  try {
    _navigator.dispatch(CommonActions.goBack());
  } catch (error) {
    // console.log('error in navigation', error)
  }
}

function popToPop() {
  try {
    _navigator.dispatch(StackActions.popToTop());
  } catch (error) {
    // console.log('error in navigation', error)
  }
}

function openDrawer() {
  try {
    _navigator.dispatch(DrawerActions.openDrawer());
  } catch (error) {
    // console.log('error in navigation', error)
  }
}

// function resetStack(routeName: string, params?: object) {
//   try {
//     const resetAction = StackActions.reset({
//       index: 0,
//       actions: [NavigationActions.navigate({ routeName, params })],
//       key: null,
//     });
//     _navigator.dispatch(resetAction);
//   } catch (error) {
//     // console.log('error in navigation', error)
//   }
// }


// add other navigation functions that you need and export them
export default {
  navigate,
  push,
  goBackToPreviousScreen,
  setTopLevelNavigator,
  replaceScreen,
  resetStack,
  popScreen,
  popToPop,
  openDrawer,
};
