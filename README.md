<img alt="React Native Permission Service" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-permission-service)

[![React Native Permission Service](https://img.shields.io/badge/-Extremely%20easy%20to%20create%20a%20React%20Native%20Component%20Library%20with%20both%20Stateful%20and%20Functional%20Component%20Examples-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-permission-service)

[![npm version](https://img.shields.io/npm/v/react-native-permission-service.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-permission-service)
[![npm](https://img.shields.io/npm/dt/react-native-permission-service.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-permission-service)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Permission Service"
        src="assets/Screenshots/react-native-permission-service.png" width="600" />
  <img alt="React Native Permission Service"
        src="assets/Screenshots/react-native-permission-service.gif" width="550" />
</p>

# Installation

Add the dependency:

```bash
npm i react-native-permission-service
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"react-native-permissions": ">= 2.2.0"
```

# Usage

## Import

```jsx
import {
  hasAllPermissionsFunc,
  requestCameraPermission,
  requestLocationPermission,
  requestPhotoLibraryPermission,
} from "react-native-permission-service";
```

## Location Permission Usage

```jsx
requestLocationPermission().then((result: string) => {
  if (result === RESULTS.GRANTED) this.setState({ isLocPermGranted: true });
});
```

## Camera Permission Usage

```jsx
requestCameraPermission().then((result: string) => {
  if (result === RESULTS.GRANTED) this.setState({ isCameraPermGranted: true });
});
```

## Gallery Permission Usage

```jsx
requestPhotoLibraryPermission().then((result: string) => {
  if (result === RESULTS.GRANTED)
    this.setState({ isPhotoLibraryPermGranted: true });
});
```

## Has All Permission Usage

```jsx
checkPermissions = () => {
  const {
    isLocPermGranted,
    isCameraPermGranted,
    isPhotoLibraryPermGranted,
  } = this.state;
  hasAllPermissionsFunc().then((res: any) => {
    res.map((item: any) => {
      switch (item.type) {
        case "location":
          this.setState({ isLocPermGranted: item.permission });
          break;
        case "camera":
          this.setState({ isCameraPermGranted: item.permission });
          break;
        case "photoLibrary":
          this.setState({ isPhotoLibraryPermGranted: item.permission });
          break;
      }
    });
    if (isLocPermGranted && isCameraPermGranted && isPhotoLibraryPermGranted) {
      // Navigation should be here
      alert("All Permissions are GRANTED!");
    }
  });
};
```

## Example Project 😍

You can checkout the example project 🥰

Simply run

- `npm i`
- `npx pod-install`// if you run it on iOS
- `react-native run-ios/android`

should work of the example project.

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

### iOS Future Plans

- [ ] App Tracking Transparency Permission Handling
- [ ] Bluetooth Peripheral Permission Handling
- [ ] Calendars Permission Handling
- [ ] Contacts Permission Handling
- [ ] FaceID Permission Handling
- [ ] Microphone Permission Handling
- [ ] Photo Library Add Only Permission Handling
- [ ] Reminders Permission Handling
- [ ] Siri Permission Handling
- [ ] Speech Recognition Permission Handling
- [ ] Store kit Permission Handling

### Android Future Plans

- [] Accept Handover Permission Handling
- [] Access Background Location Permission Handling
- [] Activity Recognition Permission Handling
- [] Add Voicemail Permission Handling
- [] Answer Phone Calls Permission Handling
- [] Body Sensors Permission Handling
- [] Call Phone Permission Handling
- [] Get Accounts Permission Handling
- [] Process Outgoing Calls Permission Handling
- [] Read Calendar Permission Handling
- [] Read Call Log Permission Handling
- [] Read Contacts Permission Handling
- [] Read External Storage Permission Handling
- [] Read Phone Numbers Permission Handling
- [] Read Phone State Permission Handling
- [] Read SMS Permission Handling
- [] Receive MMS Permission Handling
- [] Receive SMS Permission Handling
- [] Receive Wap Push Permission Handling
- [] Record Audio Permission Handling
- [] Send SMS Permission Handling
- [] Use Sip Permission Handling
- [] Write Calendar Permission Handling
- [] Write Call Log Permission Handling
- [] Write Contacts Permission Handling
- [] Write External Storage Permission Handling

# Change Log

Change log will be here !

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Permission Service is available under the MIT license. See the LICENSE file for more info.
