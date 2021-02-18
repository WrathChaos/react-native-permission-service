import { ViewStyle, ImageStyle, TextStyle, StyleSheet } from "react-native";
import { ScreenWidth } from "@freakycoder/react-native-helpers";

interface Style {
  iconContainer: ViewStyle;
}

export const _container = (mainColor: string): ViewStyle => ({
  height: 40,
  borderWidth: 1,
  borderRadius: 6,
  flexDirection: "row",
  alignItems: "center",
  borderColor: mainColor,
  justifyContent: "center",
  width: ScreenWidth * 0.7,
});

export default StyleSheet.create<Style>({
  iconContainer: {
    right: 16,
    position: "absolute",
  },
});
