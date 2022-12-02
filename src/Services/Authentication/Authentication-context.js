import React, { useState, createContext } from "react";
import { loginRequest } from "./Authentication-service";


export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);


  const onLogin = (auth,email, password) => {
    setIsLoading(true); //it remains loading until user has been authenticated
    loginRequest(auth,email, password)
      .then((userCredentials) => {
        setUser(userCredentials.user);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log("Error with authentication at Authentication-context.js " + e)
        setIsLoading(false);
        setError(e);
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        isLoading,
        error,
        user,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
