import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantNavigator } from "./Restaurant-navigator";
import { MapScreen } from "../../Features/Map/Screens/Map-screen";
import { SettingsNavigator } from "./SettingsNavigator";
import { RestaurantsContextProvider } from "../../Services/Restaurants/Restaurant-context";
import { LocationContextProvider } from "../../Services/Location/Location-context";
import { FavouritesContextProvider } from "../../Services/Favourites/Favourites-context";
import { PaymentStateProvider } from "../../Services/Payment/PaymentStateProvider";
const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <PaymentStateProvider>
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
                      color = focused ? "#A020F0" : "grey";
                    } else if (route.name === "Map") {
                      iconName = "map-legend";
                      size = focused ? 25 : 20;
                      color = focused ? "#A020F0" : "grey";
                    } else if (route.name === "Payment") {
                      iconName = "cash-multiple";
                      size = focused ? 25 : 20;
                      color = focused ? "#A020F0" : "grey";
                    } else if (route.name === "Settings") {
                      iconName = "cog-outline";
                      size = focused ? 25 : 20;
                      color = focused ? "#A020F0" : "grey";
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
                <Tab.Screen name="Settings" component={SettingsNavigator} />
              </Tab.Navigator>
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </PaymentStateProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
