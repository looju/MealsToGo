import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AppIntroSlider from "react-native-app-intro-slider";


export const CarouselScreen = ({ navigation }) => {
  const slides = [
    {
      key: "one",
      title: "         MealsToGo",
      text: "Your favourite food delivery companion",
      image: require("../../../../assets/bike.jpg"),
      backgroundColor: "#000",
    },
    {
      key: "two",
      title: "Enjoy a wide variety of meals!",
      text: "                    From anywhere, anytime",
      image: require("../../../../assets/food.jpg"),
      backgroundColor: "#000",
    },
    {
      key: "three",
      title: "Multiple payment options",
      text: "        Smooth and seamless payment for you",
      image: require("../../../../assets/cash.jpg"),
      backgroundColor: "#000",
    },
  ];



  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            source={item.image}
            resizeMode="cover"
            style={{ width: 350, height: 350 }}
          />
        </View>
        <View style={styles.title}>
          <Text
            style={{
              color: "#fff",
              fontWeight: "600",
              fontSize: 15
            }}
          >
            {item.title}
          </Text>
        </View>
        <View style={styles.text}>
          <Text style={{ color: "#fff", fontWeight: "600", fontSize: 15 }}>
            {item.text}
          </Text>
        </View>
      </View>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="arrow-forward-outline"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };
  
  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={() => navigation.navigate("Main")}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
    />
  );
};

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  title: {
    bottom: 450,
    width: 300,
    heigth: 100,
    marginLeft: "30%",
  },
  text: {
    width: 400,
    maxHeight: 200,
    left: 60,
    paddingTop: 10,
    marginTop: 10,
  },
  image: {
    width: 350,
    height: 350,
    left: 20,
    marginTop: 200,
  },
});
