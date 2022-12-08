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
import { AuthenticationContextProvider } from "./src/Services/Authentication/Authentication-context";
import { Navigation } from "./src/Infrastructure/Navigation/index";

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
          <Navigation />
          <FlashMessage position="bottom" />
        </AuthenticationContextProvider>
      </ThemeProvider>
    );
  }
}
