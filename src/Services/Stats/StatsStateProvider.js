import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const StatsState = createContext();

export const StatsStateProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const addToData = (name) => {
    let dataValue = [{ x: 1, y: 1, label: name }];
    setData(dataValue);
  };

  const saveFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@stats", jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem("@stats");
      if (value !== null) {
        setData(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(data);
  }, [data]);

  return (
    <StatsState.Provider
      value={{
        data,
        addToData,
        setData,
      }}
    >
      {children}
    </StatsState.Provider>
  );
};
