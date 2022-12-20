import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { VictoryPie, VictoryLabel } from "victory-native";

export const StatsScreen = () => {
  const data = [
    { x: 1, y: 2, label: "one" },
    { x: 2, y: 3, label: "two" },
    { x: 3, y: 5, label: "three" },
  ]

  return (
    <View style={styles.container}>
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
            easing:"circleIn",
            delay:1000
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
});
