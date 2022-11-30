import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export const MapCallout = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={{ uri: restaurant.photos[0] }} style={{height:50,width:50}}/>
      </View>
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
  textView:{
    flex:0.2,
    alignItems: 'center',
  }
});
