import React from "react";
import { View, Text } from "react-native";
import Spinner from "react-native-spinkit";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles, { _container } from "./Button.style";

interface IButtonProps {
  text: string;
  width: number;
  height: number;
  onPress: () => void;
  spinnerEnable: boolean;
  backgroundColor: string;
  spinnerVisibility: boolean;
}

const Button = (props: IButtonProps) => {
  const {
    text,
    width,
    height,
    onPress,
    spinnerEnable,
    backgroundColor,
    spinnerVisibility,
  } = props;
  return (
    <View style={styles.shadowStyle}>
      <RNBounceable
        onPress={onPress}
        style={_container(width, height, backgroundColor)}
      >
        {spinnerEnable && (
          <Spinner
            size={15}
            color="#fff"
            type="FadingCircleAlt"
            isVisible={spinnerVisibility}
          />
        )}
        {!spinnerVisibility && (
          <Text style={styles.textStyle} {...props}>
            {text}
          </Text>
        )}
      </RNBounceable>
    </View>
  );
};

Button.defaultProps = {
  width: 150,
  height: 40,
  text: "Send",
  spinnerEnable: false,
  spinnerVisibility: false,
  backgroundColor: "red",
};

export default Button;
