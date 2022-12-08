import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../Features/Settings/Screens/Settings-screen";
import { SettingsFavourites } from "../../Features/Settings/Screens/SettingsFavourites";

const Stack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="settingsFavourites"
        component={SettingsFavourites}
        options={{
          ...TransitionPresets.RevealFromBottomAndroid,
          headerTitleAlign: "center",
          headerTitle: "Favourites",
          headerStyle: { backgroundColor: "#A020F0" },
          headerTitleStyle: { color: "#fff" },
          headerBackTitleStyle: { color: "#fff" }
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
