import {
  isEmpty,
  isNil,
  anyPass,
  addIndex,
  map,
  keys,
  forEach,
  curry,
  assoc,
  reduce,
  any,
  values,
  omit,
  pipe,
  ascend,
  prop,
  descend,
  sort,
  range,
} from 'ramda';
import { Dimensions, Platform } from 'react-native';
import { useRef, useEffect, useState } from 'react';
import { NavigationService } from '../Services';

// returns true if the param is empty or nil
export const isEmptyOrNil = anyPass([isEmpty, isNil]);
export const mapIndexed = addIndex(map);

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const calculateAge = (date) => {
  const dob = new Date(date);
  const diffMs = Date.now() - dob.getTime();
  let ageDt = new Date(diffMs);
  return Math.abs(ageDt.getUTCFullYear() - 1970);
}

export const getEmailError = (email: string) =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) &&
    !isEmptyOrNil(email)
    ? 'Invalid e-mail address'
    : '';

export const renameKeysInList = (keyMap, list) => {
  if (isEmptyOrNil(keyMap) || isEmptyOrNil(list)) return list;

  const renameKeys = curry((keysMap, obj) => reduce((acc, key) => assoc(keysMap[key] || key, obj[key], acc), {}, keys(obj)));
  return map(renameKeys(keyMap), list)
}

export const createFormData = (data: object) => {
  const formData = new FormData();
  const formKeys = keys(data);

  forEach((key) => {
    formData.append(key, data[key]);
  }, formKeys);

  return formData;
};

export const renameKeysInObject = curry((keysMap, obj) =>
  reduce(
    (acc, key) => assoc(keysMap[key] || key, obj[key], acc),
    {},
    keys(obj),
  ),
);

export const isAnyPropertyEmptyInObject = (
  obj: object,
  omittedKeys: Array<string> = [],
) => {
  return pipe(omit(omittedKeys), values, any(isEmptyOrNil))(obj);
};

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
export function generateUUID() {
  const oldStr = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

  return `${Date.now()}-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function  getFacebookPlacementId(type: string) {
  if(type==='banner'){
    return Platform.OS === 'android' ? '699522224142346_975050573256175' : '699522224142346_975047159923183'
  }else{
    return Platform.OS === 'android' ? '699522224142346_975050853256147' : '699522224142346_975049576589608'
  }
}

export const getColor = (profilesLength) => {
  switch (profilesLength) {
    case 1:
      return 'rgba(242, 0, 65, 1)'
      break;
    case 2:
      return 'rgba(1, 9, 44, 1)'
      break;
    case 3:
      return 'rgba(49, 121, 50, 1)'
      break;
  }
}


// Hook
export const usePreviousHook = (value: any) => {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
};

// Hook
const isOrientationPortrait = () => {
  const { height, width } = Dimensions.get('screen');
  return width < height;
};

export const useIsDeviceOrientationPortrait = () => {
  const [isPortrait, setIsPortrait] = useState(isOrientationPortrait());

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      setIsPortrait(isOrientationPortrait());
    });
  }, []);

  return isPortrait;
};

export const handleMenuAndBackButton = (showBackButton) => {
  if (!showBackButton) return NavigationService.openDrawer();
  return NavigationService.goBackToPreviousScreen();
};

export const isIphoneXorAbove = () => {
  const dimensions = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimensions.height === 812 ||
      dimensions.width === 812 ||
      dimensions.height === 896 ||
      dimensions.width === 896)
  );
};
