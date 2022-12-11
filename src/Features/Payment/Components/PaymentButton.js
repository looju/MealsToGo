import React,{useContext} from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {PaymentState} from "../../../Services/Payment/PaymentStateProvider"


export const PaymentButton = ({navigation,restaurant}) => {
 const {processPayment,price, noPayment}=useContext(PaymentState)
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Payment",{restaurant:restaurant})}
      onLongPress={processPayment}
    >
      <View style={styles.button}>
        <Text style={styles.descriptiontext}>
          Order special @ ${price} only!
        </Text>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="cash-100" color="white" size={30} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#A020F0",
    width: 300,
    height: 30,
    borderRadius: 10,
    left: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  descriptiontext: {
    color: "#fff",
    fontFamily: "Griffy_400Regular",
    fontSize: 20,
  },
  icon: {
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
