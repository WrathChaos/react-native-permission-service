import React from "react";
import { View, StyleProp, Text, ViewStyle, TextStyle } from "react-native";
import Spinner from "react-native-spinkit";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles from "./Button.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

interface IButtonProps {
  style?: CustomStyleProp;
  text: string;
  spinnerVisibility?: boolean;
  textStyle?: CustomTextStyleProp;
  onPress: () => void;
}

const Button: React.FC<IButtonProps> = ({
  style,
  text,
  spinnerVisibility = false,
  onPress,
  textStyle,
}) => {
  return (
    <View style={styles.shadowStyle}>
      <RNBounceable onPress={onPress} style={[styles.container, style]}>
        {spinnerVisibility && (
          <Spinner
            size={15}
            color="#fff"
            type="FadingCircleAlt"
            isVisible={spinnerVisibility}
          />
        )}
        {!spinnerVisibility && (
          <Text style={[styles.textStyle, textStyle]}>{text}</Text>
        )}
      </RNBounceable>
    </View>
  );
};

export default Button;
