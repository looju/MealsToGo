import { View } from "react-native";
import React from "react";

const Spacer = ({ variant }) => {
  if (variant === "top.small") {
    return <View style={{ marginTop: 4 }} />;
  }
  if (variant === "top.medium") {
    return <View style={{ marginTop: 8 }}/>;
  }
  if (variant === "top.large") {
    return <View style={{ marginTop: 16 }}/>;
  }

  if (variant === "left.small") {
   return <View style={{ marginLeft: 4 }}/>;
  }
  if (variant === "left.medium") {
    return <View style={{ marginLeft: 8 }}/>;
  } else if (variant === "left.large") {
    return <View style={{ marginLeft: 16 }}/>;
  }
};
export default Spacer;
