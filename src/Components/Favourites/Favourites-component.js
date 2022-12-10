import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { showMessage, hideMessage } from "react-native-flash-message";
import { FavouritesContext } from "../../Services/Favourites/Favourites-context";

export const FavouritesComponent = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
  useContext(FavouritesContext);
  console.log(favourites.length);
  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

  return (
    <TouchableOpacity
      onPress={() => {
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }}
      style={{
        zIndex: 9,
        right: 25,
        top: 25,
        position: "absolute",
      }}
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "#A020F0" : "white"}
      />
        {isFavourite&&(
        showMessage({
          message: "Success",
          description: "Added to favorites",
          type:"default",
          icon:"auto",
          color:"#fff",
          animated:true,
          autoHide:true,
          duration:2000
        })
      )}
    </TouchableOpacity>
  );
};
