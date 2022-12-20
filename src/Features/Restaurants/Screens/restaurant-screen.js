import React, { useContext, useState } from "react";
import { FlatList, SafeAreaView, View, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
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
      <Search
        onFavouritesToggle={() => setIsToggled(!isToggled)}
        isFavouritesToggle={isToggled}
      />
      {isLoading && (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            top: 300,
          }}
        >
          <LottieView
            style={{
              width: 100,
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
            source={require("../../../../assets/spoon.json")}
            autoPlay
            loop
          />
        </View>
      )}

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
