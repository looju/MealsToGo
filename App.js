import React, { useState } from "react";
import { colors } from "./src/Infrastructure/Theme/colors";
import { createTheming } from "@callstack/react-theme-provider";
import {
  useFonts,
  Oswald_400Regular,
  Lato_400Regular,
  Griffy_400Regular,
  Tangerine_400Regular
} from "@expo-google-fonts/dev";
import FlashMessage from "react-native-flash-message";
import { RestaurantsContextProvider } from "./src/Services/Restaurants/Restaurant-context";
import { LocationContextProvider } from "./src/Services/Location/Location-context";
import { FavouritesContextProvider } from "./src/Services/Favourites/Favourites-context";
import { Navigation } from "./src/Infrastructure/Navigation/App-navigator";

const { ThemeProvider } = createTheming({ colors });

export default function App() {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
    Griffy_400Regular,
    Tangerine_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <ThemeProvider>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
              <FlashMessage position="bottom"/>
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
    );
  }
}
