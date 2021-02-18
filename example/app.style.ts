import { ViewStyle, StyleSheet } from "react-native";
import { isIPhoneNotchFamily } from "@freakycoder/react-native-helpers";

interface Style {
  container: ViewStyle;
  scrollViewStyle: ViewStyle;
  permissionItemContainer: ViewStyle;
  bottomAlignedButtonContainer: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
  scrollViewStyle: {
    paddingBottom: 72,
    alignItems: "center",
  },
  permissionItemContainer: {
    marginTop: 16,
  },
  bottomAlignedButtonContainer: {
    alignSelf: "center",
    position: "absolute",
    bottom: isIPhoneNotchFamily() ? 32 : 16,
  },
});
