import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { AccountScreen } from "../../Features/Account/Screens/AccountScreen";
import { LoginScreen } from "../../Features/Account/Screens/LoginScreen";
import { RegisterScreen } from "../../Features/Account/Screens/RegisterScreen";


const Stack = createStackNavigator();

export const AccountNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
    <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Regiser" component={RegisterScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
