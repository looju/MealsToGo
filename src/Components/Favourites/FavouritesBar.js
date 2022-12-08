import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
} from "react-native";
import { MapCallout } from "../../Features/Map/Components/Map-callout";


export const FavouritesBar = ({ favourites, navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          key = restaurant.name;
          return (
            <View key={key} style={{ marginRight: 10 }}>
              <View style={{ paddingBottom: 5,   alignItems: 'center',width:400 }}>
                <Text style={{ fontFamily: "Tangerine_400Regular", fontSize:25, color:"#fff"}}>My favourites</Text>
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
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
