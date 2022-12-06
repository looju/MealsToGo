import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { ButtonComponents } from "../Components/ButtonComponents";
import TypeWriter from "react-native-typewriter";

export const AccountScreen = ({ navigation }) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../../../assets/newhome.jpg")}
      style={styles.container}
    >
      <View style={styles.textView}>
        <TypeWriter typing={1} minDelay={300} initialDelay={3000} style={{color:"#fff", fontSize:30, fontFamily:"Griffy_400Regular"}}>MealsToGo</TypeWriter>
      </View>

      <View style={styles.buttonContainer}>
        <ButtonComponents
          name={"Login"}
          icon={"login"}
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
        <ButtonComponents
          name={"Register"}
          icon={"account-lock-open-outline"}
          onPress={() => {
            navigation.navigate("Register");
          }}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    width: 150,
    height: 150,
    borderRadius: 5,
    backgroundColor: "rgba(225,225,225,0.9)",
    marginTop: 350,
    marginLeft: 130,
    justifyContent: "space-evenly",
  },
  textView: {
    top: 300,
    alignItems: "center",
    justifyContent: "center",
  },
});
