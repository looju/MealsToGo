import React, { useContext, useState } from "react";
import { FlatList, SafeAreaView, View, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantsContext } from "../../../Services/Restaurants/Restaurant-context";
import { Search } from "../Components/Search-component";
import { RestaurantInfoCard } from "../Components/restaurant-info-card";
import { FadeInView } from "../../../Components/Animations/FadeAnimation";
import { FavouritesBar } from "../../../Components/Favourites/FavouritesBar";
import { FavouritesContext } from "../../../Services/Favourites/Favourites-context";

export const Restaurant = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const [isToggled, setIsToggled] = useState(false);
  const { favourites } = useContext(FavouritesContext);

  return (
    <SafeAreaView style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
      {isLoading && (
        <View
          style={{
            justifyContent: "center",
            top: 400,
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          <ActivityIndicator size={30} animating={true} color="blue" />
        </View>
      )}
      <Search
        onFavouritesToggle={() => setIsToggled(!isToggled)}
        isFavouritesToggle={isToggled}
      />
      {isToggled && (
        <FavouritesBar favourites={favourites} navigation={navigation} />
      )}
      <FlatList
        style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <View
                style={{
                  flex: 1,
                  padding: 5,
                  width: 400,
                  justifyContent: "center",
                  right: 15,
                }}
              >
                <FadeInView duration={2500}>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
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
