import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles, { _container } from "./PermissionButton.style";

interface IPermissionButtonProps {
  text: string;
  isGranted: boolean;
  onPress: () => void;
}

const PermissionButton = (props: IPermissionButtonProps) => {
  const { text = "Give Permission", isGranted = false, onPress } = props;
  const mainColor = isGranted ? "#36d921" : "#d93621";
  const iconName = isGranted ? "check" : "close";
  return (
    <RNBounceable bounceEffect={0.95} bounceFriction={2} onPress={onPress}>
      <View style={_container(mainColor)}>
        <Text style={{ color: mainColor, fontWeight: "700" }}>{text}</Text>
        <View style={styles.iconContainer}>
          <Icon name={iconName} type="AntDesign" color={mainColor} />
        </View>
      </View>
    </RNBounceable>
  );
};

PermissionButton.defaultProps = {
  example: 5,
};

export default PermissionButton;
