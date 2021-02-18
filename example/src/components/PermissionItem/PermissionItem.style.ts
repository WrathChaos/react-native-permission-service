import { ViewStyle, ImageStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  imageStyle: ImageStyle;
  descriptionTextContainer: ViewStyle;
  buttonContainer: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    width: 115,
    height: 115,
  },
  descriptionTextContainer: {
    marginTop: 8,
  },
  buttonContainer: {
    marginTop: 16,
  },
});
