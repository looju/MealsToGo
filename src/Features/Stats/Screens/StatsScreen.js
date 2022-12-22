import React, { useContext } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import LottieView from "lottie-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { VictoryPie, VictoryLabel } from "victory-native";
import { SlideOutView } from "../../../Components/Animations/FadeAnimation";
import { StatsState } from "../../../Services/Stats/StatsStateProvider";
export const StatsScreen = () => {
  const { data } = useContext(StatsState);

 

  return (
    <ImageBackground style={styles.container} source={require('../../../../assets/myrestaurant.jpg')} resizeMode={"cover"}>
      {data.length === 0 && (
        <View style={styles.noDataView}>
          <LottieView
            source={require("../../../../assets/pie.json")}
            style={styles.lottieView}
            autoPlay
            loop
          />
          <View>
            <Text style={styles.lottieText}>No available stats yet!</Text>
          </View>
        </View>
      )}
      <View style={styles.headerView}>
        <Text style={styles.text}>Last ordered restaurant</Text>
      </View>
      
      <View style={styles.piechartView}>
      <SlideOutView duration={3500}>
        <VictoryPie
          data={data}
          labels={({ datum }) => datum.label}
          labelComponent={<VictoryLabel angle={45} />}
          labelPosition={({ index }) => (index ? "centroid" : "startAngle")}
          labelPlacement={({ index }) => (index ? "parallel" : "vertical")}
          cornerRadius={({ datum }) => datum.y * 5}
          innerRadius={({ datum }) => datum.y * 5}
          colorScale={["tomato"]}
          height={500}
          style={{ labels: { fill: "#fff", fontFamily: " Griffy_400Regular" } }}
        />
        </SlideOutView>
      </View>
      
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerView: {
    marginVertical: 30,
    alignItems: "center",
  },
  text: {
    fontFamily: "Tangerine_400Regular",
    fontSize: 50,
    color: "#fff",
  },
  piechartView: {
    flex: 1,
    marginTop:15
  },
  noDataView: {
    height: 800,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  lottieView: {
    width: 200,
    height: 200,
    paddingBottom: 40,
  },
  lottieText: {
    color: "#fff",
    fontFamily: "Griffy_400Regular",
    fontSize: 15,
  },
});
