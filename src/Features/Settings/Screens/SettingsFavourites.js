import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Text
} from "react-native";
import LottieView from 'lottie-react-native';
import { RestaurantInfoCard } from "../../Restaurants/Components/restaurant-info-card";
import { FavouritesContext } from "../../../Services/Favourites/Favourites-context";

export const SettingsFavourites = () => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      {favourites.length===0 && (
        <View style={{ justifyContent:"center",alignItems:"center", alignContent:"center",height:600}}>
          <LottieView source={require('../../../../assets/star.json')} style={{width:200, height:200, marginVertical:20}} autoPlay loop />
          <View>
            <Text style={{color:"#fff", fontFamily:"Griffy_400Regular", fontSize:15}}>No saved favourites yet!</Text>
          </View>
        </View>
      )}
      <FlatList
        data={favourites}
        renderItem={(item) => {
          return (
            <TouchableOpacity>
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
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
