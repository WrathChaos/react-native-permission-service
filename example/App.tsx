import React, { Component } from "react";
import { View, AppState, AppStateStatus, ScrollView } from "react-native";
import { RESULTS } from "react-native-permissions";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenWidth } from "@freakycoder/react-native-helpers";

/**
 * ? Local Imports
 */
import styles from "./app.style";
import Button from "./src/components/Button/Button";
import PermissionItem from "./src/components/PermissionItem/PermissionItem";
import {
  hasAllPermissionsFunc,
  requestCameraPermission,
  requestLocationPermission,
  requestPhotoLibraryPermission,
} from "./build/dist/PermissionService";

interface IProps {}

interface IState {
  appState: AppStateStatus;
  isLocPermGranted: boolean;
  isCameraPermGranted: boolean;
  isPhotoLibraryPermGranted: boolean;
}

export default class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isLocPermGranted: false,
      isCameraPermGranted: false,
      isPhotoLibraryPermGranted: false,
      appState: AppState.currentState,
    };
  }

  componentDidMount() {
    AppState.addEventListener("change", this.handleAppStateChange);
    this.checkPermissions();
  }

  handleAppStateChange = (nextAppState: AppStateStatus) => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      // ? This should wait for the future references and debugging
      console.log("App has come to the foreground!");
      this.checkPermissions();
    }
    this.setState({ appState: nextAppState });
  };

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
      if (
        isLocPermGranted &&
        isCameraPermGranted &&
        isPhotoLibraryPermGranted
      ) {
        // Navigation should be here
        alert("All Permissions are GRANTED!");
      }
    });
  };

  handleRequestLocPermission = () => {
    requestLocationPermission().then((result: string) => {
      if (result === RESULTS.GRANTED) this.setState({ isLocPermGranted: true });
    });
  };

  handleRequestCameraPermission = () => {
    requestCameraPermission().then((result: string) => {
      if (result === RESULTS.GRANTED)
        this.setState({ isCameraPermGranted: true });
    });
  };

  handleRequestPhotoLibraryPermission = () => {
    requestPhotoLibraryPermission().then((result: string) => {
      if (result === RESULTS.GRANTED)
        this.setState({ isPhotoLibraryPermGranted: true });
    });
  };

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  renderLocationPermissionItem = () => {
    const { isLocPermGranted } = this.state;
    return (
      <PermissionItem
        title="Location Permission"
        isGranted={isLocPermGranted}
        source={require("./assets/permissions/map.png")}
        description="Location Permission"
        onPress={this.handleRequestLocPermission}
      />
    );
  };

  renderCameraPermissionItem = () => {
    const { isCameraPermGranted } = this.state;
    return (
      <PermissionItem
        title="Camera Permission"
        isGranted={isCameraPermGranted}
        source={require("./assets/permissions/camera.png")}
        description="Camera Permission"
        onPress={this.handleRequestCameraPermission}
      />
    );
  };

  renderGalleryPermissionItem = () => {
    const { isPhotoLibraryPermGranted } = this.state;
    return (
      <PermissionItem
        title="Gallery Permission"
        isGranted={isPhotoLibraryPermGranted}
        source={require("./assets/permissions/seo.png")}
        description="Gallery Permission"
        onPress={this.handleRequestPhotoLibraryPermission}
      />
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewStyle}>
          {this.renderLocationPermissionItem()}
          <View style={styles.permissionItemContainer}>
            {this.renderCameraPermissionItem()}
          </View>
          <View style={styles.permissionItemContainer}>
            {this.renderGalleryPermissionItem()}
          </View>
        </ScrollView>
        <View style={styles.bottomAlignedButtonContainer}>
          <Button
            width={ScreenWidth * 0.9}
            text="Check Permissions"
            onPress={this.checkPermissions}
          />
        </View>
      </SafeAreaView>
    );
  }
}
