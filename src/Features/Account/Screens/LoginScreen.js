import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { ButtonComponents } from "../Components/ButtonComponents";
import { TextInput } from "react-native-paper";
import { AuthenticationContext } from "../../../Services/Authentication/Authentication-context";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext);
  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../../../assets/login.jpg")}
      style={styles.container}
    >
      <View style={styles.buttonContainer}>
        <TextInput
          label="Email"
          placeholder="Enter email address"
          value={email}
          onChangeText={(text) => setEmail(text)}
          multiline
          style={{ width: 200, left: 25 }}
          left={<TextInput.Icon icon="email" />}
        />
        <TextInput
          label="Password"
          placeholder="Enter password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          multiline
          secureTextEntry
          style={{ width: 200, left: 25 }}
          left={<TextInput.Icon icon="eye" />}
        />
        {error && (
          <View style={{ width: 200, height:50,left: 25,paddingTop:10 }}>
            <Text style={styles.errorText}>An unexpected error occured</Text>
          </View>
        )}
        <ButtonComponents
          name={"Login"}
          icon={"login"}
          onPress={() => onLogin(email, password)}
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
    width: 250,
    height: 250,
    borderRadius: 5,
    backgroundColor: "rgba(225,225,225,0.9)",
    marginTop: 200,
    marginLeft: 75,
    justifyContent: "space-evenly",
  },
  errorText: {
    color: "red",
    fontSize: 15,
  }
});
