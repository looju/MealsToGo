import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { ButtonComponents } from "../Components/ButtonComponents";
import TypeWriter from "react-native-typewriter";
import LottieView from "lottie-react-native";

export const AccountScreen = ({ navigation }) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../../../assets/newhome.jpg")}
      style={styles.container}
    >
        <View style={{width:200, height:200, left:100, top:20}}>
          <LottieView
            autoPlay
            loop
            source={require("../../../../assets/food.json")}
          />
        </View>
      <View style={styles.textView}>
        <TypeWriter
          typing={1}
          minDelay={100}
          initialDelay={1500}
          style={{
            color: "#fff",
            fontSize: 30,
            fontFamily: "Griffy_400Regular",
          }}
        >
          MealsToGo
        </TypeWriter>
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
    marginTop: 150,
    marginLeft: 130,
    justifyContent: "space-evenly",
  },
  textView: {
    top: 150,
    alignItems: "center",
    justifyContent: "center",
  },
});
