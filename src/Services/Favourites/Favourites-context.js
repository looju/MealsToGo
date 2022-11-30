import React, { createContext, useState } from "react";
import { View, StyleSheet } from "react-native";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]); //the add function is responsible for getting the values of newly added restaurants and adding it to already existing favourites
  };

  const remove = (restaurant) => {
    const newFavourites = restaurant.filter((x) => {
      x.placeId !== restaurant.placeId;
    }); // this returns an array of values that do not have the restaurant's placeId
    setFavourites(newFavourites);
  };
  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove 
        }}
    >
      {children}
    </FavouritesContext.Provider>
  ); 
};

const styles = StyleSheet.create({});
