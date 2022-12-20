import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RestaurantInfoCard } from "../Components/restaurant-info-card";
import { PaymentButton } from "../../Payment/Components/PaymentButton";
import { List } from "react-native-paper";
import { SlideInView } from "../../../Components/Animations/FadeAnimation";

export const RestaurantDetails = ({ route, navigation }) => {
  const { restaurant } = route.params;

  const RestaurantName = () => {
    return (
      <View
        style={{ alignItems: "center", justifyContent: "center", height: 50 }}
      >
        <Text
          style={{
            color: "#fff",
            fontFamily: "Tangerine_400Regular",
            fontSize: 30,
          }}
        >
          {restaurant.name}
        </Text>
      </View>
    );
  };

  const ListAccordion = () => {
    const [expanded, setExpanded] = useState(false);
    const handlePress = () => setExpanded(!expanded); // to control the expansion of the accordion
    return (
      <ScrollView>
        <List.Section style={{ backgroundColor: "#000" }}>
          <List.Accordion
            title="Breakfast"
            titleStyle={{ color: "#fff" }}
            left={(props) => (
              <List.Icon {...props} icon="bowl-mix" color="#A020F0" />
            )}
            style={{ backgroundColor: "#000" }}
            expanded={expanded}
            onPress={handlePress}
          >
            <SlideInView duration={3000}>
              <List.Item
                titleStyle={{ color: "#fff" }}
                title="Eggs"
                left={(props) => (
                  <List.Icon {...props} icon="egg" color="#fff" />
                )}
              />
              <List.Item
                titleStyle={{ color: "#fff" }}
                title="Oats"
                left={(props) => (
                  <List.Icon {...props} icon="bowl" color="#fff" />
                )}
              />
            </SlideInView>
          </List.Accordion>

          <List.Accordion
            title="Lunch"
            titleStyle={{ color: "#fff" }}
            left={(props) => (
              <List.Icon {...props} icon="rice" color="#A020F0" />
            )}
            expanded={expanded}
            onPress={handlePress}
            style={{ backgroundColor: "#000" }}
          >
            <SlideInView duration={3000}>
              <List.Item
                titleStyle={{ color: "#fff" }}
                title="Rice"
                left={(props) => (
                  <List.Icon {...props} icon="rice" color="#fff" />
                )}
              />
              <List.Item
                titleStyle={{ color: "#fff" }}
                title="Cookie"
                left={(props) => (
                  <List.Icon {...props} icon="cookie" color="#fff" />
                )}
              />
            </SlideInView>
          </List.Accordion>

          <List.Accordion
            title="Dinner"
            titleStyle={{ color: "#fff" }}
            left={(props) => (
              <List.Icon {...props} icon="bread-slice" color="#A020F0" />
            )}
            expanded={expanded}
            onPress={handlePress}
            style={{ backgroundColor: "#000" }}
          >
            <SlideInView duration={3000}>
              <List.Item
                titleStyle={{ color: "#fff" }}
                title="spaghetti"
                left={(props) => (
                  <List.Icon {...props} icon="noodles" color="#fff" />
                )}
              />
              <List.Item
                titleStyle={{ color: "#fff" }}
                title="Chiili"
                left={(props) => (
                  <List.Icon {...props} icon="chili-hot" color="#fff" />
                )}
              />
            </SlideInView>
          </List.Accordion>
        </List.Section>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#000" }}>
      <ScrollView style={{ backgroundColor: "#000" }}>
        <RestaurantName />
        <RestaurantInfoCard restaurant={restaurant} />
        <ListAccordion />
        <PaymentButton navigation={navigation} name={restaurant.name} />
      </ScrollView>
    </SafeAreaView>
  );
};
