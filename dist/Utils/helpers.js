"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIphoneXorAbove = exports.handleMenuAndBackButton = exports.useIsDeviceOrientationPortrait = exports.usePreviousHook = exports.getColor = exports.getFacebookPlacementId = exports.generateUUID = exports.isAnyPropertyEmptyInObject = exports.renameKeysInObject = exports.createFormData = exports.renameKeysInList = exports.getEmailError = exports.calculateAge = exports.capitalizeFirstLetter = exports.mapIndexed = exports.isEmptyOrNil = void 0;
const ramda_1 = require("ramda");
const react_native_1 = require("react-native");
const react_1 = require("react");
const Services_1 = require("../Services");
// returns true if the param is empty or nil
exports.isEmptyOrNil = (0, ramda_1.anyPass)([ramda_1.isEmpty, ramda_1.isNil]);
exports.mapIndexed = (0, ramda_1.addIndex)(ramda_1.map);
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
exports.capitalizeFirstLetter = capitalizeFirstLetter;
const calculateAge = (date) => {
    const dob = new Date(date);
    const diffMs = Date.now() - dob.getTime();
    let ageDt = new Date(diffMs);
    return Math.abs(ageDt.getUTCFullYear() - 1970);
};
exports.calculateAge = calculateAge;
const getEmailError = (email) => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) &&
    !(0, exports.isEmptyOrNil)(email)
    ? 'Invalid e-mail address'
    : '';
exports.getEmailError = getEmailError;
const renameKeysInList = (keyMap, list) => {
    if ((0, exports.isEmptyOrNil)(keyMap) || (0, exports.isEmptyOrNil)(list))
        return list;
    const renameKeys = (0, ramda_1.curry)((keysMap, obj) => (0, ramda_1.reduce)((acc, key) => (0, ramda_1.assoc)(keysMap[key] || key, obj[key], acc), {}, (0, ramda_1.keys)(obj)));
    return (0, ramda_1.map)(renameKeys(keyMap), list);
};
exports.renameKeysInList = renameKeysInList;
const createFormData = (data) => {
    const formData = new FormData();
    const formKeys = (0, ramda_1.keys)(data);
    (0, ramda_1.forEach)((key) => {
        formData.append(key, data[key]);
    }, formKeys);
    return formData;
};
exports.createFormData = createFormData;
exports.renameKeysInObject = (0, ramda_1.curry)((keysMap, obj) => (0, ramda_1.reduce)((acc, key) => (0, ramda_1.assoc)(keysMap[key] || key, obj[key], acc), {}, (0, ramda_1.keys)(obj)));
const isAnyPropertyEmptyInObject = (obj, omittedKeys = []) => {
    return (0, ramda_1.pipe)((0, ramda_1.omit)(omittedKeys), ramda_1.values, (0, ramda_1.any)(exports.isEmptyOrNil))(obj);
};
exports.isAnyPropertyEmptyInObject = isAnyPropertyEmptyInObject;
// export const sortListByKey = curry((sortOrder, key, list) => {
//   const sortingFunction =
//     sortOrder === 'asc' ? ascend(prop(key)) : descend(prop(key));
//   //@ts-ignore
//   const sortedList = sort(sortingFunction, list);
//   return sortedList;
// });
/**
 *  uuid generator
 *
 * @returns
 */
function generateUUID() {
    const oldStr = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    return `${Date.now()}-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
exports.generateUUID = generateUUID;
function getFacebookPlacementId(type) {
    if (type === 'banner') {
        return react_native_1.Platform.OS === 'android' ? '699522224142346_975050573256175' : '699522224142346_975047159923183';
    }
    else {
        return react_native_1.Platform.OS === 'android' ? '699522224142346_975050853256147' : '699522224142346_975049576589608';
    }
}
exports.getFacebookPlacementId = getFacebookPlacementId;
const getColor = (profilesLength) => {
    switch (profilesLength) {
        case 1:
            return 'rgba(242, 0, 65, 1)';
            break;
        case 2:
            return 'rgba(1, 9, 44, 1)';
            break;
        case 3:
            return 'rgba(49, 121, 50, 1)';
            break;
    }
};
exports.getColor = getColor;
// Hook
const usePreviousHook = (value) => {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = (0, react_1.useRef)();
    // Store current value in ref
    (0, react_1.useEffect)(() => {
        ref.current = value;
    }, [value]); // Only re-run if value changes
    // Return previous value (happens before update in useEffect above)
    return ref.current;
};
exports.usePreviousHook = usePreviousHook;
// Hook
const isOrientationPortrait = () => {
    const { height, width } = react_native_1.Dimensions.get('screen');
    return width < height;
};
const useIsDeviceOrientationPortrait = () => {
    const [isPortrait, setIsPortrait] = (0, react_1.useState)(isOrientationPortrait());
    (0, react_1.useEffect)(() => {
        react_native_1.Dimensions.addEventListener('change', () => {
            setIsPortrait(isOrientationPortrait());
        });
    }, []);
    return isPortrait;
};
exports.useIsDeviceOrientationPortrait = useIsDeviceOrientationPortrait;
const handleMenuAndBackButton = (showBackButton) => {
    if (!showBackButton)
        return Services_1.NavigationService.openDrawer();
    return Services_1.NavigationService.goBackToPreviousScreen();
};
exports.handleMenuAndBackButton = handleMenuAndBackButton;
const isIphoneXorAbove = () => {
    const dimensions = react_native_1.Dimensions.get('window');
    return (react_native_1.Platform.OS === 'ios' &&
        !react_native_1.Platform.isPad &&
        !react_native_1.Platform.isTVOS &&
        (dimensions.height === 812 ||
            dimensions.width === 812 ||
            dimensions.height === 896 ||
            dimensions.width === 896));
};
exports.isIphoneXorAbove = isIphoneXorAbove;
//# sourceMappingURL=helpers.js.map