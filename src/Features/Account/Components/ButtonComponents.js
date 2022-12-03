import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export const ButtonComponents = ({name,icon}) => {
  return <Button mode="contained" icon={icon}>{name}</Button>;
};

const styles = StyleSheet.create({
  buttonView: {},
});
