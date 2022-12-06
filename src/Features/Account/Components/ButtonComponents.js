import React from "react";
import { Button } from "react-native-paper";

export const ButtonComponents = ({name,icon, onPress}) => {
  return <Button mode="contained" icon={icon} onPress={onPress}>{name}</Button>;
};
