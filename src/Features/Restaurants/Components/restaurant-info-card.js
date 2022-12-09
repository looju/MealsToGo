import { StyleSheet, Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import React from "react";
import { colors } from "../../../Infrastructure/Theme/colors";
import { createTheming } from "@callstack/react-theme-provider";
import { SvgUri } from "react-native-svg";
import { FavouritesComponent } from "../../../Components/Favourites/Favourites-component";



export const RestaurantInfoCard = ({ restaurant = {} }) => {


  const { useTheme } = createTheming({ colors });
  const theme = useTheme();

  const {
    name = "random restaurant",
    icon = "https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/restaurant-waiter-icon.svg",
    address = "random street",
    photos = [
      "data:image/jpeg;base64,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",
    ],
    isClosedTemporarily = true,
    isOpenNow = true,
    rating = 4,
    placeId
  } = restaurant;  //this array gets replaced by the values from the API once fetched

  const convertRatingToArray = new Array(Math.floor(rating)); //rounds off the array value to the nearest whole number
  const ratingarray = Array.from(convertRatingToArray);

  return (
    <View style={styles.container}>
      <Card mode="elevated" style={styles.card}>
        <FavouritesComponent restaurant={restaurant}/>
        <Card.Cover source={{ uri: photos[0]}} style={styles.cardcover} />
        <Card.Content style={styles.textview}>
          <Text style={[styles.text, { color: theme.colors.ui.primary }]}>
            {name}
          </Text>
          <View style={styles.ratingview}>
            {ratingarray.map((_,i) => (
              <SvgUri
              key={`star-${placeId}-${i}`}
                width="20"
                height="20"
                uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/star.svg"
              />
            ))}
            <View style={styles.openview}>
              <View
                style={{
                  paddingRight: 10,
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                {isClosedTemporarily && (
                  <View flexDirection="row">
                    <Text style={{ color: "red", fontSize:10, fontFamily:"Lato_400Regular", marginTop:5 }}>CLOSED</Text>
                    <SvgUri
                      width="15"
                      height="15"
                      uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/padlock.svg"
                      style={{marginLeft:5}}
                    />
                  </View>
                )}
              </View>

              <View style={{width:25, height:25}} />
              {isOpenNow && (
                <SvgUri
                  width="15"
                  height="15"
                  uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/check.svg"
                />
              )}

              <View/>
              <Image style={{width:15, height:15}} source={{uri:icon}}/>
            </View>
          </View>
          <Text style={styles.address}>{address}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "#FFFFFF",
    marginVertical: 10,
    marginLeft:20
  },
  cardcover: {
    backgroundColor: "#FFFFFF",
  },
  text: {
    fontFamily: "Oswald_400Regular",
    fontSize: 20,
  },
  textview: {
    marginVertical: 5,
  },
  address: {
    fontSize: 15,
    fontWeight:"600",
    fontFamily: "Griffy_400Regular",
  },
  ratingview: {
    flexDirection: "row",
    alignItems: "center",
  },
  openview: {
    justifyContent: "flex-end",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
});


