"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = require("@react-navigation/native");
const core_1 = require("@react-navigation/core");
const ramda_1 = require("ramda");
let _navigator;
function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef.current;
}
function push(routeName, params) {
    //console.log('navigating to:', routeName);
    try {
        _navigator.dispatch(native_1.StackActions.push(routeName, (0, ramda_1.defaultTo)({}, params)));
    }
    catch (error) {
        // console.log('error in navigation', error)
    }
}
function navigate(name, params) {
    //console.log('navigating to:', name);
    try {
        _navigator.dispatch(native_1.CommonActions.navigate(name, (0, ramda_1.defaultTo)({}, params)));
    }
    catch (error) {
        // console.log('error in navigation', error)
    }
}
function popScreen(noOfScreensToPop) {
    //console.log('noOfScreensToPop :', noOfScreensToPop);
    try {
        _navigator.dispatch({
            ...native_1.StackActions.pop(noOfScreensToPop),
        });
    }
    catch (error) {
        // console.log('error in navigation', error)
    }
}
function replaceScreen(routeName, params) {
    // console.log('navigating to:', routeName)
    try {
        _navigator.dispatch(native_1.StackActions.replace(routeName, params));
    }
    catch (error) {
        // console.log('error in navigation', error)
    }
}
function resetStack(routeName) {
    // console.log('Reset Stack:')
    try {
        _navigator.dispatch(native_1.CommonActions.reset({
            index: 0,
            routes: [
                { name: routeName },
            ],
        }));
    }
    catch (error) {
        // console.log('error in navigation', error)
    }
}
function goBackToPreviousScreen() {
    try {
        _navigator.dispatch(native_1.CommonActions.goBack());
    }
    catch (error) {
        // console.log('error in navigation', error)
    }
}
function popToPop() {
    try {
        _navigator.dispatch(native_1.StackActions.popToTop());
    }
    catch (error) {
        // console.log('error in navigation', error)
    }
}
function openDrawer() {
    try {
        _navigator.dispatch(core_1.DrawerActions.openDrawer());
    }
    catch (error) {
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
exports.default = {
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
//# sourceMappingURL=NavigationService.js.map