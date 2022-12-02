import React, { useState, useEffect } from "react";
import { colors } from "./src/Infrastructure/Theme/colors";
import { createTheming } from "@callstack/react-theme-provider";
import {
  useFonts,
  Oswald_400Regular,
  Lato_400Regular,
  Griffy_400Regular,
  Tangerine_400Regular,
} from "@expo-google-fonts/dev";
import FlashMessage from "react-native-flash-message";
import { RestaurantsContextProvider } from "./src/Services/Restaurants/Restaurant-context";
import { LocationContextProvider } from "./src/Services/Location/Location-context";
import { FavouritesContextProvider } from "./src/Services/Favourites/Favourites-context";
import { Navigation } from "./src/Infrastructure/Navigation/App-navigator";
import { AuthenticationContextProvider } from "./src/Services/Authentication/Authentication-context";

export const firebaseConfig = {
  apiKey: "AIzaSyCRXDng_mIAM1lS832dVR5gXByrzY27pME",
  authDomain: "mealstogo-7ddf4.firebaseapp.com",
  projectId: "mealstogo-7ddf4",
  storageBucket: "mealstogo-7ddf4.appspot.com",
  messagingSenderId: "505065133419",
  appId: "1:505065133419:web:9be5f15d831347c9f7282e",
};

const { ThemeProvider } = createTheming({ colors });

export default function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     signInWithEmailAndPassword(auth, "loju@ji.io", "password")
  //       .then((userCredentials) => {
  //         const user = userCredentials.user;
  //         console.log(user);
  //         setIsAuthenticated(true);
  //       })
  //       .catch((e) => {
  //         console.log("Error with authentication at App.js " + e);
  //       });
  //   }, 3000);
  // }, []);

  // if (!isAuthenticated) {
  //   return null;
  // }

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
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
                <FlashMessage position="bottom" />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
    );
  }
}
