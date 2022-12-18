import React, { useState, createContext, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { auth } from "./Authentication-service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children, navigation }) => {
  WebBrowser.maybeCompleteAuthSession();

  // const Provider=new GoogleAuthProvider()
  // const providerScopes=Provider.addScope('https://www.googleapis.com/auth/userinfo.profile')
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState("");

  const onLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setUser(userCredentials.user);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(
          "Error with authentication at Authentication-context.js " + e
        );
        setIsLoading(false);
        setError(e.toString());
      });
  };

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true)
    if (password !== repeatedPassword) {
      setError("Seems like the passwords do not match");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setUser(userCredentials.user);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(
          "Error with authentication at Authentication-context.js " + e
        );
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogOut = () => {
    setUser(null);
    signOut()
  };

  //  const google=()=>{
  //   signInWithPopup(auth, providerScopes)
  //     .then(getRedirectResult(auth))
  //     .then((userCredentials) => {
  //       setUser(userCredentials.user);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       const emailError = error.customData.email;
  //       setError(emailError);
  //       setIsLoading(false);
  //     });
  //  }

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "863133268828-sbeuuhtrpedudflff4vdfihs39tekhur.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const {authentication} = response
      const {accessToken}=authentication
      setAccessToken(accessToken)
    }
    if (response?.type === "dismiss") {
      console.log("Dismissed by user");
    }
    if (response?.type === "error") {
      console.log("problem with response");
    }
  }, [response]); //fetches the accesstoken once successful

  async function getUserData() {
    let userInfoResponse = await fetch(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token=ya29.a0AX9GBdVklRNVMi5bbxp-tXjoPzpQ0vBaRFu2TBavaHr7Z6j-RMbjIUZdi3jHsXUuHmC5AxDEXKYl2qekjBIuYlh0CAyFQRIcyEY7NHe_MBzXh4M7rTfoyhTPasfpSC_wgnbzEUpXYdcMXzjA4t0pKaCRMcD9jwaCgYKAaASARASFQHUCsbCBG28tM9ITr_xamgxjzqIxA0165`,
      // {
      //   headers: { Authorization: `Bearer ${accessToken}` },
      // }
    );
   console.log(userInfoResponse)
    userInfoResponse.json().then(data => {
      setUser(data);
      console.log(user);
    });
  } // fetches the user authenticated id if there is an access token

  return (
    <AuthenticationContext.Provider
      value={{
        isLoading,
        error,
        user,
        onLogin,
        onRegister,
        promptAsync,
        getUserData,
        request,
        onLogOut,
        accessToken,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
