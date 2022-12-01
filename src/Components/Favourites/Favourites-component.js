import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FavouritesContext } from "../../Services/Favourites/Favourites-context";

export const FavouritesComponent = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites} =useContext(FavouritesContext);
  console.log(favourites.length)


  const isFavourite = favourites.find((r) => {
    r.placeId === restaurant.placeId;
    
  }); //this determines mathcing values in the array

  return (
    <TouchableOpacity
      style={{ top: 25, right: 25, position: "absolute", zIndex: 9 }}
      onPress={()=>{!isFavourite? addToFavourites(restaurant) : removeFromFavourites(restaurant)}}
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
