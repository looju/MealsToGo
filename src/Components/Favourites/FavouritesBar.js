import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
} from "react-native";
import { MapCallout } from "../../Features/Map/Components/Map-callout";
import {  useFonts } from "@expo-google-fonts/dev";

export const FavouritesBar = ({ favourites, navigation }) => {
  let [fontsLoaded] = useFonts({
   Tangerine:require('../../../assets/fonts/Tangerine-Regular.ttf')
  });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {favourites.map((restaurant) => {
            key = restaurant.name;
            return (
              <View key={key} style={{ marginRight: 10 }}>
                <View style={{ paddingBottom: 5, justifyContent:"center" }}>
                  <Text style={{ fontFamily:'Tangerine' }}>
                    My favourites
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("RestaurantDetail", { restaurant });
                  }}
                >
                  <MapCallout restaurant={restaurant} />
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
