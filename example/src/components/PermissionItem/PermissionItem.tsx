import React from "react";
import { View, Text } from "react-native";
import FastImage from "react-native-fast-image";
/**
 * ? Local Imports
 */
import styles from "./PermissionItem.style";
import PermissionButton from "../../components/PermissionButton/PermissionButton";

interface IPermissionItemProps {
  title: string;
  source: any;
  description: string;
  isGranted: boolean;
  onPress: () => void;
}

const PermissionItem = (props: IPermissionItemProps) => {
  const { title, description, source, isGranted, onPress } = props;
  return (
    <View style={styles.container}>
      <FastImage source={source} style={styles.imageStyle} />
      <Text style={{ fontWeight: "bold", color: "#000", fontSize: 24 }}>
        {title}
      </Text>
      <View style={styles.descriptionTextContainer}>
        <Text style={{ textAlign: "center", color: "#ccc" }}>
          {description}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <PermissionButton
          isGranted={isGranted}
          text={isGranted ? "Allowed" : "Allow"}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

PermissionItem.defaultProps = {};

export default PermissionItem;
