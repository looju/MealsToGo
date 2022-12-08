import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../Features/Settings/Screens/Settings-screen";

const Stack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        ...TransitionPresets.RevealFromBottomAndroid,
      }}
    >
    <Stack.Screen name="settings" component={SettingsScreen} options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  );
};
