import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { VictoryPie, VictoryLabel } from "victory-native";
import { StatsState } from "../../../Services/Stats/StatsStateProvider";
export const StatsScreen = () => {
  const { data } = useContext(StatsState);

  const newdata = [
    { x: 1, y: 2, label: "one" },
    { x: 2, y: 3, label: "two" },
    { x: 3, y: 5, label: "three" },
  ];

  return (
    <View style={styles.container}>
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
        <Text style={styles.text}>Most ordered restaurants</Text>
      </View>
      <View style={styles.piechartView}>
        <VictoryPie
          data={data}
          labels={({ datum }) => datum.label}
          labelComponent={<VictoryLabel angle={45} />}
          labelPosition={({ index }) => (index ? "centroid" : "startAngle")}
          labelPlacement={({ index }) => (index ? "parallel" : "vertical")}
          cornerRadius={({ datum }) => datum.y * 5}
          innerRadius={({ datum }) => datum.y * 5}
          colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
          animate={{
            duration: 5000,
            easing: "circleIn",
            delay: 1000,
          }}
          height={500}
          style={{ labels: { fill: "#fff", fontFamily: " Griffy_400Regular" } }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
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
