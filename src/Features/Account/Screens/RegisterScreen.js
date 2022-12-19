import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { ButtonComponents } from "../Components/ButtonComponents";
import { TextInput } from "react-native-paper";
import { AuthenticationContext } from "../../../Services/Authentication/Authentication-context";


export const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error,promptAsync,getUserData,request,token } = useContext(AuthenticationContext);
  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../../../assets/register.jpg")}
      style={styles.container}
    >
      <View style={styles.buttonContainer}>
        <TextInput
          label="Email"
          placeholder="Enter email address"
          value={email}
          onChangeText={(text) => setEmail(text)}
          multiline
          style={{ width: 230, left:10 }}
          left={<TextInput.Icon icon="email" />}
        />
        <TextInput
          label="Password"
          placeholder="Enter password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          multiline
          secureTextEntry
          style={{ width: 230, left:10 }}
          left={<TextInput.Icon icon="eye" />}
        />
         <TextInput
          label="Repeat password"
          placeholder="Repeat your password"
          value={repeatedPassword}
          onChangeText={(text) => setRepeatedPassword(text)}
          multiline
          secureTextEntry
          style={{ width: 230, left:10 }}
          left={<TextInput.Icon icon="eye" />}
        />
        {error && (
          <View style={{ width: 200, height:50,left: 25,paddingTop:10 }}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
        <ButtonComponents
          name={"Register"}
          icon={"account-lock-open-outline"}
          onPress={() => onRegister(email, password,repeatedPassword)}
        />
      </View>
      <View style={{width:400, height:50, marginTop:20, alignItems:"center", justifyContent:"center"}}>
      <Text style={{color:"#fff", fontWeight:"500"}}>OR REGISTER WITH </Text>
      </View>
      <View>
      <ButtonComponents
          icon={"google"}
          onPress={() => {
            token?getUserData:promptAsync()
            }}
            disabled={!request}
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
    height: 300,
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
