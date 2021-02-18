import { ViewStyle, TextStyle, Dimensions, StyleSheet } from "react-native";

const { width: ScreenWidth } = Dimensions.get("screen");
interface Style {
  container: ViewStyle;
  textStyle: TextStyle;
  shadowStyle: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    height: 50,
    width: ScreenWidth * 0.9,
    backgroundColor: "orange",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
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
    fontWeight: "800",
  },
});
