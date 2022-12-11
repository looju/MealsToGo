import React, { useContext, useState, useEffect } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { View, Text, TouchableOpacity } from "react-native";
import { PaymentState } from "../../../Services/Payment/PaymentStateProvider";
import { List } from "react-native-paper";
import LottieView from "lottie-react-native";
import { RestaurantsContext } from "../../../Services/Restaurants/Restaurant-context";

export const PaystackGateway = ({ navigation, route }) => {
  const { noPayment, price } = useContext(PaymentState);
  const [clear, setClear] = useState(false);

  // useEffect(() => {
  //   if (clear) {
  //     return (
  //       <View
  //         style={{
  //           justifyContent: "center",
  //           alignItems: "center",
  //           alignContent: "center",
  //           height: 600,
  //         }}
  //       >
  //         <LottieView
  //           source={require("../../../../assets/transaction.json")}
  //           style={{ width: 200, height: 200, marginVertical: 20 }}
  //           autoPlay
  //           loop
  //         />
  //         <View>
  //           <Text
  //             style={{
  //               color: "#fff",
  //               fontFamily: "Griffy_400Regular",
  //               fontSize: 15,
  //             }}
  //           >
  //             No saved favourites yet!
  //           </Text>
  //         </View>
  //       </View>
  //     );
  //   }
  // }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      {clear && (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            height: 600,
          }}
        >
          <LottieView
            source={require("../../../../assets/emptycart.json")}
            style={{ width: 200, height: 200, marginVertical: 20 }}
            autoPlay
            loop
          />
          <View>
            <Text
              style={{
                color: "#fff",
                fontFamily: "Griffy_400Regular",
                fontSize: 15,
              }}
            >
            Payment canceled!
            </Text>
          </View>
        </View>
      )}

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          height: 150,
        }}
      >
        <LottieView
          style={{ width: 200, height: 200, marginVertical: 20 }}
          source={require("../../../../assets/transaction.json")}
          autoPlay
          loop
        />
      </View>
      <View style={{ paddingTop: 50 }}>
        <List.Section>
          <List.Item
            title="Restaurant Name"
            description="res"
            left={() => <List.Icon icon="food" color="#A020F0" />}
            titleStyle={{
              fontSize: 18,
              fontFamily: "Lato_400Regular",
              color: "#fff",
            }}
          />
          <List.Item
            title="Price (in NGN)"
            description={price * 700}
            left={() => <List.Icon icon="cash-100" color="#A020F0" />}
            titleStyle={{
              fontSize: 18,
              fontFamily: "Lato_400Regular",
              color: "#fff",
            }}
          />
          <List.Item
            title="Estimated delivery time"
            description="15 minutes"
            left={() => <List.Icon icon="bike-fast" color="#A020F0" />}
            titleStyle={{
              fontSize: 18,
              fontFamily: "Lato_400Regular",
              color: "#fff",
            }}
          />
        </List.Section>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("PaystackCheckout")}
          >
            <View
              style={{
                backgroundColor: "#A020F0",
                width: 300,
                height: 30,
                marginTop: 40,
                borderRadius: 10,
                left: 50,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "Griffy_400Regular",
                  fontSize: 20,
                }}
              >
                Proceed with payment
              </Text>
              <View
                style={{
                  paddingLeft: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="cash-multiple"
                  color="white"
                  size={30}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => setClear(true)}>
            <View
              style={{
                backgroundColor: "#A020F0",
                width: 300,
                height: 30,
                marginTop: 10,
                borderRadius: 10,
                left: 50,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "Griffy_400Regular",
                  fontSize: 20,
                }}
              >
                Cancel payment
              </Text>
              <View
                style={{
                  paddingLeft: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="cart-remove"
                  color="white"
                  size={30}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
