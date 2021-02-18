import { ViewStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  textStyle: TextStyle;
  shadowStyle: ViewStyle;
}

export const _container = (
  width: number,
  height: number,
  backgroundColor: string,
): ViewStyle => ({
  width,
  height,
  backgroundColor,
  borderRadius: 12,
  alignItems: "center",
  justifyContent: "center",
});

export default StyleSheet.create<Style>({
  shadowStyle: {
    shadowRadius: 5,
    shadowOpacity: 0.35,
    shadowColor: "#757575",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
  },
  textStyle: {
    color: "#fff",
  },
});
