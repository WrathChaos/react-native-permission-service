import {
  check,
  openSettings,
  request,
  PERMISSIONS,
  Permission,
  RESULTS,
} from "react-native-permissions";
import { Alert, Platform } from "react-native";

const isAndroid = Platform.OS === "android";

export type PermissionTypes = "location" | "camera" | "photoLibrary";

export interface IPermissionResult {
  type: PermissionTypes;
  permission: boolean;
}

/* -------------------------------------------------------------------------- */
/*                        Location Permission Functions                       */
/* -------------------------------------------------------------------------- */

export const requestLocationPermission = (): Promise<string> => {
  return isAndroid
    ? requestAndroidPermission(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION)
    : requestIOSPermission(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
};

/* -------------------------------------------------------------------------- */
/*                        Camera Permission Functions                        */
/* -------------------------------------------------------------------------- */

export const requestCameraPermission = (): Promise<string> => {
  return isAndroid
    ? requestAndroidPermission(PERMISSIONS.ANDROID.CAMERA)
    : requestIOSPermission(PERMISSIONS.IOS.CAMERA);
};

/* -------------------------------------------------------------------------- */
/*                       Photo Library Permission Functions                   */
/* -------------------------------------------------------------------------- */

export const requestPhotoLibraryPermission = () => {
  return isAndroid
    ? requestAndroidPermission(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
    : requestIOSPermission(PERMISSIONS.IOS.PHOTO_LIBRARY);
};

export const hasAllPermissionsFunc = () => {
  return isAndroid ? hasAndroidPermissions() : hasIOSPermissions();
};

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                       GENERIC Permission Functions.                       */
/* -------------------------------------------------------------------------- */

const hasAndroidPermissions = () => {
  return Promise.all([
    check(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION),
    check(PERMISSIONS.ANDROID.CAMERA),
    check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE),
  ]).then(handleResult.bind(this));
};

const hasIOSPermissions = () => {
  return Promise.all([
    check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE),
    check(PERMISSIONS.IOS.CAMERA),
    check(PERMISSIONS.IOS.PHOTO_LIBRARY),
  ]).then(handleResult.bind(this));
};

const handleResult = ([
  locationStatus,
  cameraStatus,
  photoLibraryStatus,
]: any): Array<IPermissionResult> => {
  const allPermissionsResult = Array<IPermissionResult>();
  if (locationStatus === RESULTS.GRANTED)
    allPermissionsResult.push({
      type: "location",
      permission: true,
    });
  else
    allPermissionsResult.push({
      type: "location",
      permission: false,
    });

  if (cameraStatus === RESULTS.GRANTED)
    allPermissionsResult.push({
      type: "camera",
      permission: true,
    });
  else
    allPermissionsResult.push({
      type: "camera",
      permission: false,
    });

  if (photoLibraryStatus === RESULTS.GRANTED)
    allPermissionsResult.push({
      type: "photoLibrary",
      permission: true,
    });
  else
    allPermissionsResult.push({
      type: "photoLibrary",
      permission: false,
    });

  return allPermissionsResult;
};

/* -------------------------------------------------------------------------- */
/*                    GENERIC Request Permission Functions                   */
/* -------------------------------------------------------------------------- */

const requestAndroidPermission = async (
  permission: Permission,
  isShowAlert: boolean = true,
  title?: string,
  body?: string,
  settingsButtonText?: string,
  cancelButtonText?: string,
): Promise<string> => {
  return request(permission).then((result: any) => {
    if (result === RESULTS.BLOCKED) {
      if (isShowAlert) {
        showSettingsAlert(title, body, settingsButtonText, cancelButtonText);
        return result;
      } else return result;
    }
    return result;
  });
};

const requestIOSPermission = async (
  permission: Permission,
  isShowAlert: boolean = true,
  title?: string,
  body?: string,
  settingsButtonText?: string,
  cancelButtonText?: string,
): Promise<string> => {
  return request(permission).then((result: any): string => {
    if (result === RESULTS.BLOCKED) {
      if (isShowAlert) {
        showSettingsAlert(title, body, settingsButtonText, cancelButtonText);
        return result;
      } else return result;
    }
    return result;
  });
};

export const showSettingsAlert = (
  title: string = "Permission Alert",
  body: string = "Please check app's permissions",
  settingsButtonText: string = "Settings",
  cancelButtonText: string = "Cancel",
) => {
  Alert.alert(
    // ? Title
    title,
    // ? Body
    body,
    [
      {
        text: settingsButtonText,
        onPress: () =>
          openSettings().catch(() => console.warn("cannot open settings")),
      },
      {
        text: cancelButtonText,
        onPress: () => console.log("No Pressed"),
        style: "cancel",
      },
    ],
    { cancelable: false },
  );
};
