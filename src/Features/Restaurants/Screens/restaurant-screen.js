import React, { useContext } from "react";
import { FlatList, SafeAreaView, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";

import { RestaurantsContext } from "../../../Services/Restaurants/Restaurant-context";
import { FavouritesContext } from "../../../Services/Favourites/Favourites-context";

import { Search } from "../Components/Search-component";
import { RestaurantInfoCard } from "../Components/restaurant-info-card";


export const Restaurant = ({ navigation }) => {
  const { isLoading,restaurants } = useContext(RestaurantsContext);
  const {favourites,addToFavourites, removeFromFavourites} = useContext(FavouritesContext);
  
  return (
    <SafeAreaView style={{marginTop:10}}>
      {isLoading && (
        <View style={{ justifyContent: "center", top: 400 }}>
          <ActivityIndicator size={30} animating={true} color="blue" />
        </View>
      )}
      <Search />
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate('RestaurantDetail',{restaurant:item})}>  
              <View
                style={{
                  flex: 1,
                  padding: 5,
                  width: 400,
                  justifyContent: "center",
                  right: 15,
                }}
              > 
                <RestaurantInfoCard restaurant={item} />
              </View>
            </TouchableOpacity>
          );
          // we passed in the params of restaurants: item because item contains all of the data we need
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};
