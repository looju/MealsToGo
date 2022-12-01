import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { WebView } from "react-native-webview";

export const MapCallout = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: restaurant.photos[0] }}
        style={styles.imageView}
      />

      <View style={styles.textView}>
        <Text>{restaurant.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: 150,
    height: 150,
  },
  imageView: {
    flex: 0.8,
  },
  textView: {
    flex: 0.2,
    alignItems: "center",
  },
});
