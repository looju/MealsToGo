import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantNavigator } from "./Restaurant-navigator";
import { MapScreen } from "../../Features/Map/Screens/Map-screen";
import { RestaurantsContextProvider } from "../../Services/Restaurants/Restaurant-context";
import { LocationContextProvider } from "../../Services/Location/Location-context";
import { FavouritesContextProvider } from "../../Services/Favourites/Favourites-context";

const Tab = createBottomTabNavigator();

const Settings = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flex: 1,
      }}
    >
      <Text>Settings</Text>
    </View>
  );
};

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === "Restaurant") {
                    iconName = "food-fork-drink";
                    size = focused ? 25 : 20;
                    color = focused ? "red" : "grey";
                  } else if (route.name === "Map") {
                    iconName = "map-legend";
                    size = focused ? 25 : 20;
                    color = focused ? "red" : "grey";
                  } else if (route.name === "Settings") {
                    iconName = "cog-outline";
                    size = focused ? 25 : 20;
                    color = focused ? "red" : "grey";
                  }
                  return (
                    <MaterialCommunityIcons
                      name={iconName}
                      size={size}
                      color={color}
                    />
                  );
                },
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "#fff",
                headerShown: false,
                tabBarStyle: { backgroundColor: "#000" },
              })}
            >
              <Tab.Screen name="Restaurant" component={RestaurantNavigator} />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
